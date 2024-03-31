const express = require('express');

const userController = require('../Middlewares/user');

const router = express.Router();

// GET User Dashboard Info
router.get('/', userController.getProfile);

// GET User Info
router.get('/user/:userId', userController.getUser);

// GET User Requests
router.get('/requests/:userId', userController.getRequests);
// GET User Drafts
router.get('/drafts/:userId', userController.getDrafts);
// GET A Requests
router.get('/request/:requestId', userController.getRequest);
// Add A Request
router.post('/request', userController.addRequest);

// GET Workflows
router.get('/workflow/', userController.getWorkflows);
// GET Workflow Requirements
router.get('/workflow/:workflowId', userController.getWorkflow);
module.exports = router;
