const express = require('express');
const { createBooking } = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, createBooking);

module.exports = router;
