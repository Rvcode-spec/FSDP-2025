const Listing = require('../models/listing');
const asyncHandler = require('../utils/asyncHandler')
const cloudinary = require('../utils/cloudinary');

exports.createListing = asyncHandler(async (req, resp) => {

   const result = await cloudinary.uploader.upload(req.file.path);

   const {name, price} = req.body;

   const newListing = new Listing({
      name,
      price,
      image: result.secure_url, // ✅ Cloudinary URL
    });

     await newListing.save();

    resp.status(200).json({ message: 'Listing created', listing: newListing });

    resp.status(500)
    throw new Error(err)
});


