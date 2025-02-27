const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    password:Number,
    email: String
})

module.exports =mongoose.model('Users', userSchema);