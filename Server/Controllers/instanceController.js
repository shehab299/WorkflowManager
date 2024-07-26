
// Models
const Instance = require("../Models/InstanceModel.js");
const Stage = require("../Models/StageModel.js");
const Requst = require("../Models/RequestModel.js");

// Utils
const asyncDecorator = require("../Utils/asyncDec.js");
const exclude = require("../Utils/exclude.js");

// Errors
const AppError = require("../Utils/AppError");


async function getAllInstances(req, res, next){

    const instances = await Instance.findAll();

    res.status(200).json({
        status: "success",
        data: instances
    });
}


async function getInstance(req,res,next){

    const instance = await Instance.findByPk(req.instanceId);

    if(!instance){
        next(new AppError(404,"Instance Not Found"));
    }

    res.status(200).json({
        status: "success",
        data: instance
    });
}


async function createInstance(req, res, next){

    const userId = req.user.id;
    const workflowId = req.body.workflowId;

    const stage = await Stage.findOne({
        where: {
            workflowId: workflowId,
            order: 1
        }
    });

    if(!stage){
        next(new AppError(400,"Workflow Isn't Valid"));
    }

    const instance = await Instance.create({
        createdBy: userId,
        workflowId: workflowId,
        stageId: stage.id
    });


    const Request = await Request.create({
        fromId: userId,
        instanceId: instance.id,
        state: "PENDING",
        stageId: instance.stageId  
    });


    res.status(201).json({
        status: "success",
        data: instance
    });
}


async function updateInstance(request, operation){

    // get the instance
    // get the stage


    // if it is the last stage, return the id of finished stage
    // update the instance with the new stage id and create a new request
    // return the new instance
}


module.exports = {
    getAllInstances: asyncDecorator(getAllInstances),
    getInstance: asyncDecorator(getInstance),
    createInstance: asyncDecorator(createInstance)
}


