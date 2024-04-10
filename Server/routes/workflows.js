const express = require("express");


const router = express.Router();



router.get("/workflow/", getWorkflows);

router.get("/workflow/:workflowId", getWorkflow);


export default router;