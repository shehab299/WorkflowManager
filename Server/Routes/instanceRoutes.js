const { Router } = require('express');
const validateId = require('../Middlewares/validateId');
const instanceController = require('../Controllers/instanceController');
const auth  = require('../Controllers/authController');

const instanceApp = Router();

instanceApp.param("instanceId", validateId("instanceId"));

instanceApp.route("/")
    .get(auth.protect, auth.authorize("admin"), instanceController.getAllInstances)
    .post(auth.protect, instanceController.createInstance);

instanceApp.route("/:instanceId")
        .get(auth.protect, auth.authorize("admin"), instanceController.getInstance)


module.exports = instanceApp;