const Listing = require('../models/listing');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

exports.createListing = async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Save URL to MongoDB
    const newListing = new Listing({
      name: req.body.name,
      price: req.body.price,
      image: result.secure_url, // ✅ Cloudinary URL
    });

    await newListing.save();

    // Optionally remove local file after upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({ message: 'Listing created', listing: newListing });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
