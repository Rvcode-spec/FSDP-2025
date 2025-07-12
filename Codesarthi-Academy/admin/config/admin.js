const express = require('express');
const { default: mongoose, model } = require('mongoose');

const AdminSchema = new mongoose.Schema({

    name : String,
    email : String,
    password : String,
    mobileNo : Number
})

module.exports = mongoose.model('Admin', AdminSchema);