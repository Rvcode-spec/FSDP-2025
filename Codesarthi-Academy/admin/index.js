const express = require('express');
require('./config/db');
const dotenv = require('dotenv')
dotenv.config();

const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (res, resp)=>{
    resp.send('Welcome to RSVcodesolutions')
})


server.use('/api/auth', require('./routers/auth'))



server.listen(5050, ()=>{
    console.log("Server Start");
    
})




