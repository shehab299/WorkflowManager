const express = require('express');

const adminController = require('../Middlewares/admin');

const router = express.Router();

// GET Admin Dashboard Info
router.get('/', adminController.getIndex);

// GET All Users
router.get('/users', adminController.getUsers);
// GET User Info
router.get('/user/:userId', adminController.getUser);
// Add User
router.post('/user', adminController.addUser);
// Edit User
router.put('/user/:userId', adminController.editUser);
// Remove User
router.delete('/user/:userId', adminController.deleteUser);

// GET All Users Requests
router.get('/all-requests/', adminController.getAllRequests);
// GET User Requests
router.get('/requests/:userId', adminController.getRequests);
// GET User Drafts
router.get('/drafts/:userId', adminController.getDrafts);
// GET A Requests
router.get('/request/:requestId', adminController.getRequest);
// Add A Request
router.post('/request', adminController.addRequest);
// Edit A Request
router.put('/request/:requestId', adminController.editRequest);
// Remove A Request
router.delete('/request/:requestId', adminController.deleteRequest);

// GET Workflows
router.get('/workflow/', adminController.getWorkflows);
// GET Workflow Requirements
router.get('/workflow/:workflowId', adminController.getWorkflow);
// Add Workflow
router.post('/workflow/:workflowId', adminController.addWorkflow);
// Edit Workflow Requirements
router.put('/workflow/:workflowId', adminController.editWorkflow);
// Remove Workflow
router.delete('/workflow/:workflowId', adminController.deleteWorkflow);

module.exports = router;
