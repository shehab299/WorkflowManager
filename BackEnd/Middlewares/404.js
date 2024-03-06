const handler404 = (req,res) => {
    res.status(404).json({
        status: "fail",
        message: `Can't find ${req.originalUrl} on this server`
    })
}

module.exports = handler404;