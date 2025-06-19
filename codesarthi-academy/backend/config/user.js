const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phono: Number,
})

module.exports = mongoose.model('Users', UserSchema)