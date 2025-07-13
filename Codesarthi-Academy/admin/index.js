const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const cors = require('cors');
require('./config/db'); // ✅ Your DB config

dotenv.config();

const dev = process.env.NODE_ENV !== 'production'; // ✅ Define dev first
const app = next({ dev });                         // ✅ Then use it
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  // ✅ Your backend APIs
//   server.use('/api/auth', require('./routers/auth'));
  server.use('/courses', require('./routers/course'));

  // ✅ Test API
  server.get('/api', (req, res) => {
    res.send('✅ Backend API working');
  });

  // ✅ Next.js frontend route handling
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
  });
});
