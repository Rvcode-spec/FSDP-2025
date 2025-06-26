const express = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
dotenv.config(); // Load the .env file variables
const connectDB = require('./config/dbconnect');
connectDB(); // Load the mongoDB connect gets MONGO_URI

// Authentication API 
const User = require('./models/user')
const Admin = require('./models/admin');


const port = process.env.PORT || 9000;
const server = express();

// Middleware
server.use(express.json())

server.get('/',(req,resp)=>{
    resp.send("hell Ravi")
})



server.post('/register', async (req, resp)=>{
    console.log("Received at backend Data:", req.body);

    const {password} = req.body;

    try{

        const saltRounds = parseInt(process.env.SALT_ROUNDS)||10;
        const hashPassword = await bcrypt.hash(password, saltRounds); // Password hash karo

            // New User Object 
        let user = new User({ 
            ...req.body,
             password:hashPassword
        }); // data received in mongoDB User Model 

        let result = await user.save() // save the new user data
        result = result.toObject(); // Useing the simple javaScpirt Object 
        // delete result.password // Dalete password ko 
        resp.send("User registered:",result)
       
    }catch(error){
         console.error("Error while registering:", error);
         resp.status(500).send("Something went wrong");
    }  
});


server.post('/login', async (req,resp)=>{

    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) return resp.status(401).send("Invalid Email");
 
     console.log("Password in DB (hashed):", user.password);

    const authMatch = await bcrypt.compare(password, user.password);
    if(!authMatch)return resp.status(401).send("Password is not match");

    console.log("Login",authMatch);
    
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn:"1d"});

    resp.json({token});
    

});


server.post('/admin/register', async(req, resp)=>{
    console.log("Received at backend Data:", req.body);
    

    const {email, password} = req.body;

    const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return resp.status(400).json({ message: "Admin already exists" });
        }

    try{

        const saltAmdin = parseInt(process.env.SALT_ROUNDS) || 10;
        const hashPassword = await bcrypt.hash(password, saltAmdin);

        let admin = new Admin({
            ...req.body,
            password:hashPassword
        })

        let result = await admin.save();
        result = result.toObject();

           resp.status(201).json({ message: "Admin registered successfully" });

    }catch(err){
      resp.status(500).json({ message: "Signup failed", error: error.message });
        
    }

})

server.post('/admin/login', async(req,resp)=>{
    const {email, password} = req.body;

    const admin = await User.findOne({email});
    if(!admin) return resp.status(401).send("Invalid Email");
 
     console.log("Password in DB (hashed):", admin.password);

    const authMatch = await bcrypt.compare(password, admin.password);
    if(!authMatch)return resp.status(401).send("Password is not match");

    console.log("Login",authMatch);
    
    const token = jwt.sign({id:admin._id},process.env.JWT_SECRET, {expiresIn:"1d"});
    resp.json({token});
    
});


server.listen(port,()=>{
    console.log("server start");
    
});