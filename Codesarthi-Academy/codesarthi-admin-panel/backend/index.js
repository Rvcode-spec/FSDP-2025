const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
dotenv.config();

connectDB();

const server = express();
server.use(express.json());
server.use(cors());


// Routes Admin
server.use('/api/admin', require('./routers/auth'));


 const PORT = process.env.PORT || 5050;
  server.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
  });
