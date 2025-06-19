const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    phono: String,

})

module.exports = mongoose.model('Admins', AdminSchema)