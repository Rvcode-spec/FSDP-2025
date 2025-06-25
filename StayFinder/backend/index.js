const express = require('express');
const dotenv = require('dotenv');
const database =require('./config/connectDB')
const User = require('./module/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 6000;


const server = express();
dotenv.config();
database();


server.use(express.json());


server.get('/',(req,resp)=>{
    resp.send("Hello")
})


server.get('/api/test', (req, resp) => {
  resp.send('Test route working!');
});
// register 

server.post('/register', async (req,resp)=>{

    const {email,password}=req.body;

    const user = await User.findOne({email});
    if(user) return resp.status(401).send("already registered");

    try{

        const salt = parseInt(process.env.SALT_ROUNDS)||10;
        const hashPassword = await bcrypt.hash(password,salt);


        let user = new User({
            ...req.body,
            password:hashPassword,
        })

        let result = await user.save();
        resp.send(result);
        console.log("Register Successful");
        
    }
    catch(error){
        console.log(error);
        
        resp.status(500).send("Something is Wrong")
        

    }

})


// login 

server.post('/login',async (req,resp)=>{

    const {email, password}= req.body;

    const user = await User.findOne({email});
    if(!user) return resp.status(401).send("Invalid Email");

    try{

        const auth = await bcrypt.compare(password, user.password);
        if(!auth) return resp.status(401).send("Password is not Match");


        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SCEURTY,
        )

        resp.send(token);
        console.log("Login Successful")
    }catch(error){
        console.log(error);
        resp.status(500).send("Server error")
        
    }

})



server.listen(port, ()=>{
    console.log("Server Start");
    
})