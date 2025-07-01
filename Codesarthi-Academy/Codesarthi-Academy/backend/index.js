const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config(); // Load the .env file variables
connectDB(); // Load the mongoDB connect gets MONGO_URI
const server = express();

server.use(express.json());
server.use(cors());


// Application Testing  API
server.get('/api/test', (req, resp) => {
    resp.send("Welcome To CodeSarthi Academy");
//    console.log(req.body);
   
})


//Routes
server.use('/api/authUser', require('./routes/authUser'));









const port = process.env.PORT;
server.listen(port, () => {
    console.log("server start");

});