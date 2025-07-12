const express = require('express');
const {createCheckoutSession} = require('../controllers/paymentControllers');
const router = express.Router();

router.post('/payment', createCheckoutSession);

 module.exports = router;
