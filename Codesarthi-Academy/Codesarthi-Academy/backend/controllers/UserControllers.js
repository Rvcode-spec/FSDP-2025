const User = require('../models/user');
const bcrypt = require('bcrypt');
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

    if(!user){
        const error = new Error("User not found");
        error.statusCode = 404;
    }


    resp.json(user)


});