import express  from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import handler404 from "./Middlewares/404.js";


dotenv.config({ path: "./config.env" });

import flowRoutes from './routes/flows.js'
import workflowRoutes from './routes/workflows.js';
import userRoutes from './routes/user.js'
import roleRoutes from "./routes/role.js";
import authMiddleware from "./Middlewares/auth.js";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev")); // Development Logger


//Controllers
import {loginController,signupController} from "./controllers/auth.js"

//Routes

app.post('/signup', signupController);
app.post('/login', loginController);


app.use('/api/v1/flows', authMiddleware , flowRoutes);
app.use('/api/v1/workflows',authMiddleware ,workflowRoutes);
app.use('/api/v1/users',authMiddleware ,userRoutes);
app.use('/api/v1/roles',authMiddleware ,roleRoutes);


app.use(handler404); //404 ERROR


export default app;




