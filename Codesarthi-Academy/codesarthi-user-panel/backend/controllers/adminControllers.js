const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const asyncHandler = require('../utils/asyncHandler');


exports.register = asyncHandler(async (req, resp, next) => {

    const { name, email, password, mobileNo }= req.body
  

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return resp.status(401).send('already Admin Registered');

    const salt = parseInt(process.env.SALT_ROUNDS);
    const hashPassword = await bcrypt.hash(password, salt);


    const admin = new Admin({
        name,
        email,
        password: hashPassword,
        mobileNo
    });


    await admin.save();
    resp.status(201).json({ message: "Admin Register Successful" });

    
});


exports.login = asyncHandler(async (req, resp, next) => {
      
    const { email, password } = req.body;
    console.log(req.body);
    

      
    const admin = await Admin.findOne({ email });
    if (!admin) {
        resp.status(400);
        throw new Error("Invalid Email");
    }

    const adminAuth = await bcrypt.compare(password, admin.password);
    if (!adminAuth){
        resp.status(404);
        throw new Error("Login failed")
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);

    resp.status(200).json({
        message: "Admin Login Successful",
        token: token
    });


});