import express  from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import handler404 from "./Middlewares/404.js";

import { faker } from '@faker-js/faker';
import User from "./models/user.js";

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

// user test

// const data = async (props = {}) => {
//   const defaultProps = {
//     firstname: faker.internet.userName(),
//     lastname: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
//   return Object.assign({}, defaultProps, props);
// };

// User.create(await data());

// User.findAll()
//   .then(users => {
//     // Handle the retrieved users
//     console.log(users);
//   })
//   .catch(err => {
//     // Handle any errors that occurred during the query
//     console.error('Error retrieving users:', err);
//   });


//404 ERROR
app.use(handler404);


export default app;