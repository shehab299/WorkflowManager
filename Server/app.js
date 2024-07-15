const express = require("express");
const {errorHandler, errorLogger, notFoundHandler} = require("./Controllers/errorController");
const morgan = require("morgan");
const cors = require("cors")

const userApp = require("./Routes/userRoutes.js");
const authApp = require("./Routes/authRoutes.js");
const workflowApp = require("./Routes/workflowRoutes.js");


const app = express();

app.use(cors())
app.use(express.json());

app.use((req,res,next) => {
    console.log("Middleware 1");
    next();
});

app.use(morgan('dev'))

app.use("/workflows", workflowApp);
app.use("/auth", authApp);
app.use("/users",  userApp);
app.use(notFoundHandler, errorLogger, errorHandler);


module.exports = app;
