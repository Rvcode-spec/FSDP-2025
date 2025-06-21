const  mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

if(mongoose.connect(process.env.MONGO_URI)){
    console.log("DB joined ");
    
};