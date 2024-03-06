const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const handler404 = require("./Middlewares/404.js");

dotenv.config({ path: "./config.env" })
const app = express();


// Middleware
app.use(express.json());

// Dev logging
if (process.env.NODE_ENV === "development")
    app.use(morgan("dev"));

    
// Routes
app.get('/', (req, res) => {
    res.send("HI");
});


//404 ERROR
app.use(handler404);


module.exports = app;