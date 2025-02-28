const express = require('express');
require('./DB/server');
const User = require('./DB/user');
const cors = require('cors');

const Port = 5000; // Server  Post

const app = express(); // initialize Express
app.use(express.json()); //Middleware to parse JSON
app.use(cors());


app.post('/SignUp', (req,resp)=>{
    let user = new User(req.body);
    console.log(user);
    
    
})


app.listen(Port,()=>{
    console.log("App Successfully Running on Port 5000");
    
})