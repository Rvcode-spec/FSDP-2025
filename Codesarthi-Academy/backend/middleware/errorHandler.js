const errorHandler = (error, req, resp, next)=>{

    const statusCode = resp.statusCode && resp.statusCode !==200? resp.statusCode : 500;

    resp.status(statusCode).json({
        message: error.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
}

module.exports = errorHandler;