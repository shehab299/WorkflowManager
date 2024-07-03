const { Router } = require("express");


const workflowController = require("../Controllers/workflowController");
const authCtrl = require("../Controllers/authController");
const validateId = require("../Middlewares/validateId");

const workflowApp = Router();

workflowApp.param("workflowId", validateId("workflowId"));

workflowApp.param("stageId", validateId("stageId"));


workflowApp.route("/")
    .post(authCtrl.protect, authCtrl.authorize("admin") , workflowController.createWorkflow)
    .get(authCtrl.protect, workflowController.getAllWorkflows);

workflowApp.route("/:workflowId")
    .get(authCtrl.protect, workflowController.getWorkflow)
    .patch(authCtrl.protect, authCtrl.authorize("admin"), workflowController.updateWorkflow)
    .delete(authCtrl.protect , authCtrl.authorize("admin"), workflowController.deleteWorkflow);

workflowApp.route("/:workflowId/stages")
    .get(authCtrl.protect, workflowController.getStages)
    .post(authCtrl.protect, authCtrl.authorize("admin"), workflowController.createStage);

workflowApp.route("/:workflowId/stages/:stageId")
    .get(authCtrl.protect, workflowController.getStage)
    .patch(authCtrl.protect, authCtrl.authorize("admin"), workflowController.updateStage)
    .delete(authCtrl.protect, authCtrl.authorize("admin"), workflowController.deleteStage);


module.exports = workflowApp;

