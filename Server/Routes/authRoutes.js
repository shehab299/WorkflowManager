const { Router } = require("express");
const authController = require("../Controllers/authController");

const authApp = Router();

authApp.post("/register", authController.register);

authApp.post("/login", authController.login);

module.exports = authApp;