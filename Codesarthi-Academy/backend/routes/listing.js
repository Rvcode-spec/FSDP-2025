const express = require('express');
const {createListing} = require('../controllers/imageControllers')
const upload = require('../middleware/multer')
const router = express.Router();

 router.post('/upload', upload.single('image'), createListing)

 module.exports = router;



