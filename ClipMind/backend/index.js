const express = require('express');
require('./config/dbConnect');
const cors = require('cors');
const User = require('./config/user-Schema');
const jwt = require('jsonwebtoken')

const jwtkey = 'ClipMind';

const server = express();
server.use(express.json());
server.use(cors());


server.post('/signup', async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
})

server.post('/login', async (req,resp)=>{

    try {
      if (!req.body.email || !req.body.password) {
        return resp
          .status(400)
          .json({ result: "Email and password are required" });
      }
     let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");

    if (user) {
      jwt.sign({ user }, jwtkey, { expiresIn: '2h' }, (err, token) => {
        return resp.json({
          user: user,
          auth: token
        });
      })
    } else {
      return resp.status(404).json({ result: "No User Found" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ error: "Internal Server Error" });
  }

})



server.listen(9000,()=>{
    console.log("Server Start");
    
})