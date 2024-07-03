//Libraries
const multer = require("multer");
const path = require("path");
const fs = require("fs");

//Models
const User = require("../Models/UserModel.js")

//Utils
const asyncDecorator = require("../Utils/asyncDec.js");
const exclude = require("../Utils/exclude.js");

//Error Handler
const AppError = require("../Utils/AppError");



async function getAllUsers(req, res, next){

    const users = await User.findAll(
        {
            attributes: {
                exclude: ['password']
            }
        }
    );

    res.status(200).json({
        status: "success",
        data: users    
    });
}

async function getUser(req,res,next){
    
    const user = await User.findByPk(req.id , {
        attributes: {
            exclude: ['password']
        }
    });

    if(!user){
        next(new AppError(404,"User Not Found"));
    }

    res.status(200).json({
        status: "success",
        data: user
    });
}

async function createUser(req,res, next){

    if(req.body.password != req.body.confirmPassword){
        next(new AppError(400,"Passwords do not match"));
    }

    const options = {fields: ["name", "email" , "password"], returning: true};
    const user = await User.create(req.body, options);

    exclude(user, 'password');

    res.status(201).json({
        status: "success",
        data: user
    });

}

async function updateUser(req,res, next){

    const user = await User.findByPk(req.id);


    if(!user){
        next(new AppError(404,"User Not Found"));
    }

    await user.update(req.body, {
        fields: ["name", "email" , "password", "role"],
        returning: true
    }); 

    exclude(user , 'password' , 'avatar');

    res.status(200).json({
        status: "success",
        data: user
    });
}

async function deleteUser(req,res, next){

    await User.destroy({
        where: {
            id: req.id
        }
    })

    res.status(204).json({
        status: "success",
        data: null
    });
}



module.exports = {
    createUser : asyncDecorator(createUser),
    updateUser : asyncDecorator(updateUser),
    deleteUse  : asyncDecorator(deleteUser),
    getAllUsers: asyncDecorator(getAllUsers),
    getUser    : asyncDecorator(getUser)
};

