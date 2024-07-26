// Models
const Instance = require("../Models/InstanceModel.js");

//Errors
const AppError = require("../Utils/AppError.js");

// Utils
const asyncDecorator = require("../Utils/asyncDec.js");
const exclude = require("../Utils/exclude.js");
 

// Instances

async function getAllInstances(req, res, next){

    const instances = await Instance.findAll({
        where: {
            createdBy: req.user.id
        }
    });

    res.status(200).json({
        status: "success",
        data: instances
    });
}

async function getInstance(req, res, next){

    const instance = await Instance.findOne({
        where: {
            id: req.params.instanceId,
            createdBy: req.user.id
        }
    });

    if(!instance){
        next(new AppError(404, "Instance Not Found"));
    }

    res.status(200).json({
        status: "success",
        data: instance
    });
}


// Requests

async function getAllReceivedRequests(req, res, next){

    const requests = await Request.findAll({
        where: {
            toId: req.user.id,
        }
    });

    res.status(200).json({
        status: "success",
        data: requests
    });

}

async function getReceivedRequest(req, res, next){

    const request = await Request.findOne({
        where: {
            id: req.params.requestId,
            toId: req.user.id
        }
    });

    if(!request){
        next(new AppError(404, "Request Not Found"));
    }

    res.status(200).json({
        status: "success",
        data: request
    });
}

async function getAllSentRequests(req, res, next){

    const requests = await Request.findAll({
        where: {
            fromId: req.user.id
        }
    });

    res.status(200).json({
        status: "success",
        data: requests
    });

}

async function getSentRequest(req, res, next){

    const request = await Request.findOne({
        where: {
            id: req.params.requestId,
            fromId: req.user.id
        }
    });


    if(!request){
        next(new AppError(404, "Request Not Found"));
    }

    res.status(200).json({
        status: "success",
        data: request
    });
}

async function updateSentRequest(req, res, next){

    const requestId = req.requestId;

    const request = await Request.findOne({
        where: {
            id: requestId,
            fromId: req.user.id
        }
    });

    if(!request){
        next(new AppError(404, "Request Not Found"));
    }

    if(request.state !== "PENDING"){
        next(new AppError(400, "Request Already Processed"));
    }

    const operation = req.body.operation;

    if(operation === "save"){
        request.message = req.body.message;
        await request.save();
    }
    else if(operation === "send"){
        request.message = req.body.message;
        request.state = "SENT";
        request.toId = req.body.toId;

        await request.save();
    }
    else{
        next(new AppError(400, "Invalid Operation"));
    }

    res.status(200).json({
        status: "success",
        data: request
    });
}

async function updateReceivedRequest(req, res, next){

    const requestId = req.requestId;

    const request = await Request.findOne({
        where: {
            id: requestId,
            toId: req.user.id
        }
    });

    if(!request){
        next(new AppError(404, "Request Not Found"));
    }

    if(request.state !== "SENT"){
        next(new AppError(400, "Request Already Processed"));
    }

    const operation = req.body.operation;

    if(operation === "accept"){
        request.state = "ACCEPTED";
        await request.save();
        await updateInstance(request, "accept");
    }else if(operation === "reject"){
        request.state = "REJECTED";
        await request.save();
        await updateInstance(request, "reject");
    }else{
        next(new AppError(400, "Invalid Operation"));
    }
    
    res.status(200).json({
        status: "success",
        data: request
    });

}


// update a sent request 

// first get the send request 
// if it is not pending, then it is already processed and return an error
// if the operation is save request, then update the request
// if the operation is send request, validate the request then update the request to be send 


// update a received request

// first get the received request
// if is not sent, then it is already processed and return an error
// if the operation is accept, then update the request state to accepted and then call updateInstance
// if the operation is reject, then update the request state to rejected





module.exports = {    
    getAllInstances: asyncDecorator(getAllInstances),
    getInstance: asyncDecorator(getInstance),
    getAllReceivedRequests: asyncDecorator(getAllReceivedRequests),
    getReceivedRequest: asyncDecorator(getReceivedRequest),
    getAllSentRequests: asyncDecorator(getAllSentRequests),
    getSentRequest: asyncDecorator(getSentRequest),
    updateSentRequest: asyncDecorator(updateSentRequest),
    updateReceivedRequest: asyncDecorator(updateReceivedRequest)
}

