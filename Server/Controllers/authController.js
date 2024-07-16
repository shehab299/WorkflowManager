// Libraries
const path = require("path");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

//Utils
const asyncDecorator = require("../Utils/asyncDec.js");
const exclude = require("../Utils/exclude.js");

//Models
const User = require("../Models/UserModel.js");

//Error Handler
const AppError = require("../Utils/AppError.js");


async function login(req, res, next){

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return next(new AppError(400, "Email and Password are required"));
    }

    const query = {where: {email}};
    const user = await User.findOne(query);

    if( !user || !(await user.comparePassword(password)) ){
        return next(new AppError(401, "Invalid Username or Password"));
    };

    user.password = null;
    const token = await promisify(jwt.sign)({user}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});

    res.status(200).json({
        status: "success",
        token
    });
}

async function register(req, res, next){
    
    const user = await User.create(req.body , { 
        fields : ["name", "email", "password", "graduationDate"]
    });

    if(!user){
        next(new AppError(400, "Error Creating User"));
    }

    exclude(user, 'password', 'avatar');

    res.status(201).json({
        status: "success",
        data: null //My Choice My Code
    });
}

async function protect(req, res, next){

    if(!req.headers.authorization){
        next(new AppError(401, "Unauthorized"));
    }

    let token = req.headers.authorization.split(" ")[1];

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    let id = decoded.id;

    const user = await User.findByPk(id);

    if(!user){
        next(new AppError(404, "User Has Been Deleted"));
    }

    req.user = user;
    next();
}

function authorize(...roles){

    return (req, res, next) => {

        if(!roles.includes(req.user.role)){
            next(new AppError(403, "Unauthorized"));
        }

        next();
    }
}


m = {};

m.login = asyncDecorator(login);
m.register = asyncDecorator(register);
m.protect = asyncDecorator(protect);
m.authorize = authorize;

module.exports = m;
