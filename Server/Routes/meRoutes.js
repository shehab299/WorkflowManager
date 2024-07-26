const { Router } = require("express");

const meApp = Router();

const meController = require("../Controllers/meController.js");


// Instances

meApp.get("/instances", meController.getAllInstances);
meApp.get("/instances/:instanceId", meController.getInstance);


// Requests
meApp.get("/sendRequests", meController.getAllSentRequests);
meApp.get("/sendRequests/:requestId", meController.getSentRequest);

meApp.get("/receivedRequests", meController.getAllReceivedRequests);
meApp.get("/receivedRequests/:requestId", meController.getReceivedRequest);

module.exports = meApp;

