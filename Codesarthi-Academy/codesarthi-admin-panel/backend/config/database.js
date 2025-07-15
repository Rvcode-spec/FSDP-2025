const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () =>{
    try{
         await mongoose.connect(process.env.MONGO_URI);
         console.log("Database Conncetion Successfull");
         
    }catch(error){
        console.log(" connection failed:", error.message);
    }
};

module.exports = connection;

