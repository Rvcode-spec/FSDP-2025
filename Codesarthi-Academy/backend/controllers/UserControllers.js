const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const asyncHandler = require('../utils/asyncHandler')


exports.register = asyncHandler(async(req, resp, next)=>{

    const {name, email, password } = req.body;

    const  existingUser = await User.findOne({email});
    if(existingUser) return resp.status(401).send("already registered");

    const salt = parseInt(process.env.SALT_ROUNDS);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        email,
        password: hashPassword,
    });


    await user.save();
    resp.status(201).json({message: 'User Register Successful'});

});

exports.login = asyncHandler(async(req,resp,next)=>{

    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) return resp.status(400).json({message:" Invalid Email"});

    const authuser = await bcrypt.compare(password, user.password);
    if (!authuser) return resp.status(401).send("Incorrect password");

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);

   resp.status(200).json({
            message: "Login Successful",
            token: token,
    }); 
})