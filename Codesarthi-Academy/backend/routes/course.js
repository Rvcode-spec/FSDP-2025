const express = require('express');
const {createCourse} = require('../controllers/courseControllers')
const upload = require('../middleware/multer')
const router = express.Router();

 router.post('/upload', upload.single('image'), createCourse)

 module.exports = router;



