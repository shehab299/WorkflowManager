const AppError = require("../Utils/AppError");


function validateId(field = "id"){

    return (req,res,next, val) => {

        if(!field){
            return next(new AppError(500, "Internal Server Error"));
        }

        const parsedId = parseInt(val);

        if(isNaN(parsedId)){
            return next(new AppError(400, "Invalid Id"));
        }

        req[field] = parsedId;
        next();
    }

}


module.exports = validateId;