import { Router } from "express";
import User from "../models/User.js";
import * as bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userRouter = Router();


userRouter.get('/' , async (req,res) => {
    
    try {
        const searchQuery = req.query.role;
        console.log(searchQuery);
        let users;

        if(searchQuery)
            users = await User.findAll({where: {roleId: searchQuery}});
        else
            users = await User.findAll()

        res.json(users);

    } catch (error) {
        console.log(error);
        res.json([]);
    }
});



export default userRouter;