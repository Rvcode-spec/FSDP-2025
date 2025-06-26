try{

        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true, // avoids error from old parser
            useUnifiedTopology : true, // eneble to mongoDB Driver 

        });
        
        console.log("MongoDb connected successfully");
        console.log("---------------------------------");
        
        
    } catch (error){
        console.log("MongoDB connection failed:", error.message);
        process.exit(1);
    }