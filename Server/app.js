import express  from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import handler404 from "./Middlewares/404.js";

dotenv.config({ path: "./config.env" });
const app = express();


// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Dev logging
if (process.env.NODE_ENV === "development")
    app.use(morgan("dev"));

    
// Routes
app.get('/', (req, res) => {
    res.send("HI");
});


//404 ERROR
app.use(handler404);


export default app;