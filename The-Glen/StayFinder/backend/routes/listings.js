const express = require('express');
const {getListing, getListingById, createListing} = require('../controllers/listingController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/',       getListing);
router.get('/:id',    getListingById);
router.post('/', auth, createListing);
    
module.exports = router;