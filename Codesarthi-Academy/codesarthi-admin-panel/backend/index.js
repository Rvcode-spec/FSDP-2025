const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
dotenv.config();

connectDB();

const server = express();
server.use(express.json());
server.use(cors());

server.get('/', (req , resp)=>{
  resp.send('Welcome the CodeSarthi-Academy Admin Panel')
})


// Routes Admin
server.use('/api/admin', require('./routers/auth'));
server.use('/api/course', require('./routers/course'));



 const PORT = process.env.PORT || 9000;
  server.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
  });
