const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    instructor: {

        type: String,
        required: true
    },

    category: {

        type: String,
        required: true
    },


    duration: {

        type: Number,
        required: true
    },


    rating: {

        type: Number,
        required: true
    },

    description: {

        type: String,
        required: true
    },


image : {
  type: [String], 
  required: true
}

})

module.exports = mongoose.model('Course', CourseSchema);