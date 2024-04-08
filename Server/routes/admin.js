import { Router } from "express";

import {
  addRequest,
  addUser,
  addWorkflow,
  deleteRequest,
  deleteUser,
  deleteWorkflow,
  editRequest,
  editUser,
  editWorkflow,
  getAllRequests,
  getDrafts,
  getIndex,
  getRequest,
  getRequests,
  getUser,
  getUsers,
  getWorkflow,
  getWorkflows,
} from "../controllers/admin.controller";

const router = Router();

// GET Admin Dashboard Info
router.get("/", getIndex);

// GET All Users
router.get("/users", getUsers);
// GET User Info
router.get("/user/:userId", getUser);
// Add User
router.post("/user", addUser);
// Edit User
router.put("/user/:userId", editUser);
// Remove User
router.delete("/user/:userId", deleteUser);

// GET All Users Requests
router.get("/all-requests/", getAllRequests);
// GET User Requests
router.get("/requests/:userId", getRequests);
// GET User Drafts
router.get("/drafts/:userId", getDrafts);
// GET A Requests
router.get("/request/:requestId", getRequest);
// Add A Request
router.post("/request", addRequest);
// Edit A Request
router.put("/request/:requestId", editRequest);
// Remove A Request
router.delete("/request/:requestId", deleteRequest);

// GET Workflows
router.get("/workflow/", getWorkflows);
// GET Workflow Requirements
router.get("/workflow/:workflowId", getWorkflow);
// Add Workflow
router.post("/workflow/:workflowId", addWorkflow);
// Edit Workflow Requirements
router.put("/workflow/:workflowId", editWorkflow);
// Remove Workflow
router.delete("/workflow/:workflowId", deleteWorkflow);

export default router;
