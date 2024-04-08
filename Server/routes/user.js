import { Router } from "express";

import {
  addRequest,
  getDrafts,
  getProfile,
  getRequest,
  getRequests,
  getUser,
  getWorkflow,
  getWorkflows,
} from "../controllers/user.controller";

const router = Router();

// GET User Dashboard Info
router.get("/", getProfile);

// GET User Info
router.get("/user/:userId", getUser);

// GET User Requests
router.get("/requests/:userId", getRequests);
// GET User Drafts
router.get("/drafts/:userId", getDrafts);
// GET A Requests
router.get("/request/:requestId", getRequest);
// Add A Request
router.post("/request", addRequest);

// GET Workflows
router.get("/workflow/", getWorkflows);
// GET Workflow Requirements
router.get("/workflow/:workflowId", getWorkflow);
export default router;
