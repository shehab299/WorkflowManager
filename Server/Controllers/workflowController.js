//Libraries
const path = require("path");
const fs = require("fs");

//Models
const Workflow = require("../Models/WorkflowModel.js");
const Stage = require("../Models/StageModel.js");

//Utils
const asyncDecorator = require("../Utils/asyncDec.js");
const exclude = require("../Utils/exclude.js");

//Error Handler
const AppError = require("../Utils/AppError");


async function getAllWorkflows(req, res, next){

    const workflows = await Workflow.findAll();

    res.status(200).json({
        status: "success",
        data: workflows    
    });
}

async function getWorkflow(req,res,next){
    
    const workflow = await Workflow.findByPk(req.workflowId);

    if(!workflow){
        next(new AppError(404,"Workflow Not Found"));
    }

    res.status(200).json({
        status: "success",
        data: workflow
    });
}

async function createWorkflow(req,res, next){

    const options = {returning: true};
    const workflow = await Workflow.create(req.body, options);

    res.status(201).json({
        status: "success",
        data: workflow
    });

}

async function updateWorkflow(req,res, next){

    let workflow = await Workflow.findByPk(req.workflowId);

    if(!workflow){
        next(new AppError(404,"Workflow Not Found"));
    }

    workflow = await workflow.update(req.body, {
        returning: true
    }); 


    res.status(200).json({
        status: "success",
        data: workflow
    });
}

async function deleteWorkflow(req,res, next){

    await Workflow.destroy({
        where: {
            id: req.id
        }
    })

    res.status(204).json({
        status: "success",
        data: null
    });
}

async function getStages(req,res,next){

    const workflow = await Workflow.findByPk(req.workflowId);

    if(!workflow){
        next(new AppError(404,"Workflow Not Found"));
    }

    const stages = await workflow.getStages({
        order: [["order", "ASC"]]
    });

    res.status(200).json({
        status: "success",
        data: stages
    });
}

async function getStage(req,res,next){

    console.log(req.stageId);

    const stage = await Stage.findByPk(req.stageId);

    if(!stage){
        next(new AppError(404,"Stage Not Found"));
    }

    res.status(200).json({
        status: "success",
        data: stage
    });
};

async function createStage(req,res,next){

    console.log(req.workflowId);

    const workflow = await Workflow.findByPk(req.workflowId);

    if(!workflow){
        next(new AppError(404,"Workflow Not Found"));
    }


    const options = {returning: true};
    const stage = await workflow.createStage(req.body, options);

    res.status(201).json({
        status: "success",
        data: stage
    });

}

async function updateStage(req,res,next){

    let stage = await Stage.findByPk(req.stageId);

    if(!stage){
        next(new AppError(404,"Stage Not Found"));
    }

    stage = await stage.update(req.body, {
        returning: true
    }); 

    res.status(200).json({
        status: "success",
        data: stage
    });
}

async function deleteStage(req,res,next){

    await Stage.destroy({
        where: {
            id: req.stageId
        }
    })

    res.status(204).json({
        status: "success",
        data: null
    });
}


module.exports = {
    createWorkflow  : asyncDecorator(createWorkflow),
    updateWorkflow  : asyncDecorator(updateWorkflow),
    deleteWorkflow  : asyncDecorator(deleteWorkflow),
    getAllWorkflows : asyncDecorator(getAllWorkflows),
    getWorkflow     : asyncDecorator(getWorkflow),
    getStages       : asyncDecorator(getStages),
    createStage     : asyncDecorator(createStage),
    getStage        : asyncDecorator(getStage),
    updateStage     : asyncDecorator(updateStage),
    deleteStage     : asyncDecorator(deleteStage)
};

