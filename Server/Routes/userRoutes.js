const { Router } = require('express');
const userController = require("../Controllers/userController.js");
const validateId = require("../Middlewares/validateId.js")
const auth = require("../Controllers/authController.js");

const userApp = Router();

userApp.param('id', validateId("id"));

userApp.get("/", auth.protect, auth.authorize("admin") , userController.getAllUsers);

userApp.get("/:id", auth.protect, auth.authorize("admin") ,userController.getUser);

userApp.post("/", auth.protect, auth.authorize("admin"), userController.createUser);

userApp.patch("/:id", auth.protect, auth.authorize("admin") ,userController.updateUser);

// userApp.delete("/:id", auth.protect, auth.authorize("admin"), userController.deleteUser);

module.exports = userApp;


