const express = require("express");

const router = express.Router();

// GET User Requests
router.get("/requests/:userId", getRequests);

// GET A Requests
router.get("/request/:requestId", getRequest);

// Add A Request
router.post("/request", addRequest);


export default router;