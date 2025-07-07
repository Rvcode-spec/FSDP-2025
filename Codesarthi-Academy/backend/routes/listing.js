const express = require('express');
const upload = require('../middleware/upload');
const { getListing, getListingById, createListing } = require('../controllers/listingControllers')
const router = express.Router();

router.get('/', getListing);
router.get('/:id', getListingById);



router.post('/create',  upload.array('images'), createListing);

module.exports = router;