const cloudinary = require('cloudinary').v2;
const Course = require('../module/course')

exports.addCourse = async(req,resp)=>{

    try{
        const course = new Course(req.body);
        await course.save();
        resp.status(201).json({message: 'Course added successfully', course});
    }catch(erroe){
        resp.status(500).json({ error: 'Failed to add course', details: error.message });
    }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses', details: err.message });
  }
};