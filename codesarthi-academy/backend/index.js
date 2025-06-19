const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Load the .env file variables
const connectDB = require('./config/dbconnect');
connectDB(); // Load the mongoDB connect gets MONGO_URI

const User = require('./config/user')
const Admin = require('./config/admin')

const port = process.env.PORT || 9000;
const server = express();

// Middleware
server.use(express.json())


server.get('/',(req,resp)=>{
   resp.send("Welcome to Codesarthi Academy API")
})


server.post('/register', async (req, resp)=>{
    console.log("Received at backend Data:", req.body);
    let user = new User(req.body); // data received in mongoDB User Model 
    let result = await user.save(); // save the new user data
    result = result.toObject(); // Useing the simple javaScpirt Object 
    resp.send(result)
});

server.listen(port,()=>{
    console.log("server start");
    
});