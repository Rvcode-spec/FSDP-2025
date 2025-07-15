const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const bodyParser = require('body-parser');


dotenv.config(); // Load the .env file variables
connectDB(); // Load the mongoDB connect gets MONGO_URI
const server = express();

server.use(express.json());
server.use(errorHandler)
server.use(cors());
server.use(bodyParser.json());
server.use(express.static('public'));


// Application Testing  API
server.get('/CodeSarthi-Acadmey/test', (req, resp) => {
    resp.send("Welcome To CodeSarthi Academy");
//    console.log(req.body);
   
})


//Routes User
server.use('/CodeSarthi-Acadmey/auth/user', require('./routes/authuser'));
server.use('/api/auth/user', require('./routes/authuser'));

// Routes course
server.use('/CodeSarthi-Acadmey/course', require('./routes/course'));

// Router Payment 

server.use('/CodeSarthi-Acadmey', require('./routes/payment'));



const port = process.env.PORT;
server.listen(port, () => {
    console.log("server start");

});