const express = require('express');
require('./DB/config');
const cors = require('cors');
const User = require('./DB/user');
const port = 5000;

const app = express();
app.use(express.json()) // Middleware to parse JSON
app.use(cors())

app.post("/SignUp", async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
})


app.post("/Login", async (req,resp)=>{
        let user = await User.findOne({
            email:req.body.email,
            password:req.body.password
        })
        resp.send(user)
})

app.listen(port, ()=>{
    console.log("App Successfully Runing Port 5000");
    
})