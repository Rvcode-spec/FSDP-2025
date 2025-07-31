const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({

  name: String,
  description: String,
  location: String,
  price: Number,
   images: {
    type: [String],
    default: []
  },
   host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},  { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);