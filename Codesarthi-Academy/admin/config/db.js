const mongoose = require('mongoose');

if(mongoose.connect('mongodb://localhost:27017/rvscodesolutions')){
    console.log("Data Connect");
    
}