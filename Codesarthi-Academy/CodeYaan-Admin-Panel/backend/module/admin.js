const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:{type:String, unique:true},
    mobileNo: Number,
})

module.exports = mongoose.model('Admins', AdminSchema)