import {Router} from 'express';
import Workflow from '../models/workflow.js';
import Stage from '../models/stage.js';


const workflowRouter = Router();

workflowRouter.get('/', async (req, res) => {
    const workflows = await Workflow.findAll();
    res.status(200).json(workflows);
});

workflowRouter.get('/:id', async (req, res) => {
    const workflow = await Workflow.findByPk(req.params.id);

    if (!workflow) {
        return res.status(404).json({ error: 'Workflow not found' });
    }

    res.status(200).json(workflow);
});

workflowRouter.post('/', async (req, res) => {
    const name = req.body.name;
    const wf = await Workflow.create({name});
    res.status(200).json(wf);
});

workflowRouter.post('/:id/stages' , async (req,res) => {

    const workflow = await Workflow.findByPk(req.params.id);

    if (!workflow) {
        return res.status(404).json({ error: 'Workflow not found' });
    }

    let stages = req.body.stages;
    stages.sort((a,b) => a.order - b.order);

    stages = await Promise.all(stages.map(async stage => {

        stage = Stage.create({
            role: stage.role,
            order: stage.order,
            workflowId: workflow.id
        });

        return stage
    }));

    stages.forEach(async (stage,index) => {
        if (index < stages.length - 1) {
            await stage.update({
                nextStageId: stages[index+1].id
            });
        }
    });
    
    res.send("In Dev");
});

workflowRouter.patch('/:id', async (req,res) => {

    const workflow = await Workflow.findByPk(req.params.id);

    if (!workflow) {
        return res.status(404).json({ error: 'Workflow not found' });
    }

    const name = req.body.name;

    await workflow.update({name});

    res.status(200).json(workflow);
});

export default workflowRouter;