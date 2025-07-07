// const mongoose = require('mongoose');

// const ListingSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   image: {
//     type: [String], // Array of image URLs (e.g., from Cloudinary)
//     required: true,
//   },
//   description: {
//     type: String,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Listing', ListingSchema);





const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  
name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Listing', listingSchema);
