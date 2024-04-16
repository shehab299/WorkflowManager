import User from "../models/User.js";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const signupController = async (req,res) => {

    try {
        console.log("hello");

        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        let password = req.body.password;

        if(!firstname || !lastname || !email || !password)
            return res.status(400).json({status: "failed to register user"});

        const saltRounds = 10;
        password = await bcrypt.hash(password,saltRounds);

        console.log(password);

        const user = {
            firstname,lastname,email,password
        };

        const createdUser = await User.create(user);

        res.status(200).json(createdUser);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({error: "error creating user"});
    }
};

export const loginController = async (req,res) => {

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password)
        return res.status(400).json({status: "fail"});

    const fetcheduser = await User.findOne({
        where : {
            email: email
        }
    });

    if(!fetcheduser)
        return res.status(400).json({status: "fail"});

    const ismatched = await bcrypt.compare(password,fetcheduser.password);

    if(!ismatched)
        return res.status(400).json({status: "fail"});


    const token = jwt.sign(fetcheduser.id,"shehab");

    res.setHeader('Authorization',`Bearer ${token}`);
    fetcheduser.password = undefined;
    res.status(200).json({
        user: fetcheduser,
    });
};

export default {loginController,signupController};




