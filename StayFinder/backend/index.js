const express = require('express');
const dotenv = require('dotenv');
const database =require('./config/connectDB')
const cors = require('cors');

dotenv.config();

const server = express();
server.use(cors());
  
server.use(express.json());

// Connect to MongoDB
database();



server.get("/", (req, resp) => {
  resp.send("✅ Backend is connected properly!");
});
// Routes

server.use('/api/auth', require('./routes/auth'));
server.use('/api/listing', require('./routes/listings'));
server.use('/api/booking',require('./routes/bookings'))


const port = process.env.PORT;
server.listen(port, ()=>{
    console.log("Server Start");
    
})