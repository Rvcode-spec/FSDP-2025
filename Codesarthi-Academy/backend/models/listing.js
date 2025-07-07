const mongoose = require('mongoose');


const ListingSchema = new mongoose.Schema({

    tital : String,
    price : Number,
    image : [String],
    description: String,

    createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('listings', ListingSchema);