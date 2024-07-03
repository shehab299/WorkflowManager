function errorHandler(err, req, res, next) {

    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    err.message = err.message || "Internal Server Error";

    if (process.env.DEV) {
        console.log(err);
    }

    res.status(err.statusCode).send({
        status: err.status,
        message: err.message
    });
}

function errorLogger(err, req, res, next) {
    console.log(err);
    next(err);
}

function notFoundHandler(req,res,next){
    res.status(404).json({
        status: "fail",
        message: "Resource Not Found"
    });
}

module.exports = {errorHandler, errorLogger, notFoundHandler};