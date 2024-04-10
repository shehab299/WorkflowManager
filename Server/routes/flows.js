import { Router } from "express";
import Workflow from "../models/workflow.js";
import Stage from "../models/stage.js"
import FlowInstance from "../models/flow.js";

const router = Router();

router.post('/' , async (req,res) => {

    const workflowId = req.body.workflowid;
    const userId = req.body.userid;

    // Validate workflowId and userId
    if (!workflowId || !userId) {
        return res.status(400).json({ error: "Missing workflowId or userId" });
    }

    const workflow = await Workflow.findByPk(workflowId);

    // Check if workflow exists
    if (!workflow) {
        return res.status(404).json({ error: "Workflow not found" });
    }

    const firstStage = await Stage.findOne({ where: { workflowId: workflowId, order: 1 } });

    // Check if firstStage exists
    if (!firstStage) {
        return res.status(404).json({ error: "First stage not found" });
    }

    const instanceObj = {
        workflowId: workflowId,
        currentStage: firstStage.id,
        userId: userId
    }

    const flowInst = await FlowInstance.create(instanceObj);

    console.log(flowInst);

    res.json({ msg: "Flow instance created" });
});


router.get('/:id', async (req,res) => {
    const flowInst = await FlowInstance.findByPk(req.params.id);

    if (!flowInst) {
        return res.status(404).json({ error: "Flow instance not found" });
    }

    res.json(flowInst);
});


router.get('/' , async (req,res) => {
    const flowInsts = await FlowInstance.findAll();
    res.json(flowInsts);
});


export default router;
