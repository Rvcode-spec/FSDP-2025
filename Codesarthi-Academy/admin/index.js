const express = require('express');
const next = require('next');
require('./config/db')
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  // ✅ Load backend API routes correctly
  server.use('/api/auth', require('./routers/auth'));
  server.use('/courses', require('./routers/course'));

  // Test route
  server.get('/api', (req, res) => {
    res.send('✅ Backend API working');
  });

  // ✅ Next.js frontend pages
//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log("Start");
  });
});
