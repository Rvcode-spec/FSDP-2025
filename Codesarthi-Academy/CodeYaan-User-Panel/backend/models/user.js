const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phono: Number,
})

module.exports = mongoose.model('Users', UserSchema)