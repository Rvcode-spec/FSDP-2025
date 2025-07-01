const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () =>{
    try{
         await mongoose.connect(process.env.MONGO_URI);
         console.log("Conncetion Successfull");
         
    }catch(error){
        console.log(" connection failed:", error.message);
    }
    
};

module.exports = connectDB;

