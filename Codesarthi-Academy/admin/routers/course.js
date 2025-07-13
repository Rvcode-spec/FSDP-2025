const express = require('express');
const {addCourse, getCourses} = require('../controllers/courseControllers');
const router = express.Router();


router.post('/add', addCourse);        
router.get('/', getCourses); 

module.exports = router;