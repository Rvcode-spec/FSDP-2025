const  mongoose = require('mongoose');
if(mongoose.connect('mongodb://localhost:27017/ClipMind')){
    console.log("DB joined ");
    
};