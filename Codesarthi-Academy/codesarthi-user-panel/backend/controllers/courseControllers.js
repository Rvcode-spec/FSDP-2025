const Course = require('../models/course');
const asyncHandler = require('../utils/asyncHandler')
const cloudinary = require('../utils/cloudinary');

exports.createCourse = asyncHandler(async (req, resp) => {

const result = await cloudinary.uploader.upload(req.file.path,{
   folders: "CodeSarthi-Academy"
})

   const {name, price} = req.body;

   const newCourse = new Course({
      name,
      price,
      image: result.secure_url, // ✅ Cloudinary URL
      
    });

    console.log("Uploaded to:", result.secure_url);

     await newCourse.save();

    resp.status(200).json({ message: 'Course created', Course: newCourse });

    resp.status(500)
    throw new Error("Server Error")
});


