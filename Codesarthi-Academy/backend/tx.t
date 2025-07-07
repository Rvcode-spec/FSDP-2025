// const multer = require('multer');
// const path = require('path');

// // Accept only image files
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png|webp/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype);
//   if (extname && mimetype) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only image files are allowed!'), false);
//   }
// };

// // Storage setup with destination
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // make sure this folder exists
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// // Final upload object
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
// });

// module.exports = upload;
-------------------------------------


const Listing = require('../models/listing');
const asyncHandler = require('../utils/asyncHandler');
const cloudinary = require('../utils/cloudinary');

exports.createListing = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No image file provided",
    });
  }

  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    return res.status(200).json({
      success: true,
      message: "Image uploaded!",
      data: result,
    });
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return res.status(500).json({
      success: false,
      message: "Cloudinary upload failed",
    });
  }
});
