const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const database = async ()=>{

    try{
         await mongoose.connect(process.env.MONGO_URI);
         console.log("Conncetion Successfull");
         
    }catch(error){
        console.log(" connection failed:", error.message);
    }
}

module.exports=database;
