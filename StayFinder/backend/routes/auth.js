const express = require('express');
const {register,login}= require('../controllers/authController');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    // your registration logic here
    res.status(201).send('User registered!');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  try {
    // your registration logic here
    res.status(201).send('User login!');
  } catch (err) {
    res.status(500).send('Server error');
  }
});;

module.exports = router;
