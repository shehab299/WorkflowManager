import express  from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import handler404 from "./Middlewares/404.js";
dotenv.config({ path: "./config.env" });

import flowRoutes from './routes/flows.js'
import workflowRoutes from './routes/workflows.js';

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev")); // Development Logger
    

//Routes
app.use('/api/v1/flows', flowRoutes);
app.use('/api/v1/workflows',workflowRoutes);


app.use(handler404); //404 ERROR


export default app;




