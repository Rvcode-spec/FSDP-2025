const express = require('express');
require('./config/dbConnect');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('./config/user-Schema')

dotenv.config();
const port = process.env.PORT || 5000;
const server = express();

server.use(express.json());

server.get('/',(req,resp)=>{
    resp.send('Hello ')
})

server.post('/register', async (req,resp)=>{
    
    const {email,password} = req.body;

    const userverify = await User.findOne({email})
    if(userverify){
        return resp.status(400).json({message:"User already exists"})

    }

    try{
        const salt = parseInt(process.env.SALT_ROUNDS)
        const hashPassword = await bcrypt.hash(password,salt);

        let user = new User({
            ...req.body,
            password:hashPassword
        });

        let result = await user.save();
        resp.send(result);

    }catch(error){
       console.error("Error while registering:", error);
        resp.status(500).send("Something went wrong");
    }
});

server.post('/login', async(req,resp)=>{

    const {email, password}= req.body

    const user = await User.findOne({email});
    if(!user) return resp.status(401).send({message:"Invalid Email"});

        const auth = await bcrypt.compare(password, user.password);
         if (!auth) return resp.status(401).send("Password is not match");

         const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"})

       resp.send(token);
   });

   
  

server.listen(port,()=>{
    console.log("Server Start");
    console.log("-----------------------------------------------------------------");
    
    
})