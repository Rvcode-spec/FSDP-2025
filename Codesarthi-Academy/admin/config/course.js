const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({

          title: String,
          instructor: String,
          category: String,
          students: Number,
          duration: String,
          rating: Number,
          price: Number,
          description: String,
})

module.exports = mongoose.model('Course', CourseSchema);