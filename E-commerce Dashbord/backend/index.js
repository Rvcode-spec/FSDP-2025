const express =require('express')
require("./DB/config");
const User = require("./DB/user");
const cors = require('cors');
const AddProduct = require('./DB/Add-Product');

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors())

app.post('SignUp', async(req,resp)=>{
    let user =new user(req.body)
    resp.send("set")
})