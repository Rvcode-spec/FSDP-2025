const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler')


dotenv.config(); // Load the .env file variables
connectDB(); // Load the mongoDB connect gets MONGO_URI
const server = express();

server.use(express.json());
server.use(errorHandler)
server.use(cors());


// Application Testing  API
server.get('/api/test', (req, resp) => {
    resp.send("Welcome To CodeSarthi Academy");
//    console.log(req.body);
   
})


//Routes User
server.use('/api/auth/user', require('./routes/authuser'));
server.use('/api/auth/user', require('./routes/authuser'));

// Routes Admin
server.use('/api/auth/admin', require('./routes/authadmin'));
server.use('/api/auth/admin', require('./routes/authadmin'));


// Routes Listing

server.use('/api/listing', require('./routes/listing'));






const port = process.env.PORT;
server.listen(port, () => {
    console.log("server start");

});