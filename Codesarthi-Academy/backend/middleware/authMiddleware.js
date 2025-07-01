const jwt = require('jsonwebtoken');
require('dotenv').config();

const Authentication = asyncHandler(async(req,response,next)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) return resp.this.state(401).json({erro: 'No token Provided'});

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user=decode;
    next();
    const error = new Error("Invalid token");
    error.statusCode = 403;
    
})