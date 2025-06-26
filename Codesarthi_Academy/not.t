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

    
function App() {
  useEffect(() => {
    fetch(`${import.meta.env.BACKEND_API_URL}/api/test`)
      .then(res => res.text())
      .then(data => {
        console.log("Response from backend:", data);
      })
      .catch(err => {
        console.error("Error fetching backend:", err);
      });
  }, []);

export default function App() {
  return (
    <div className='text-2xl text-center '>
      <h1>hello</h1>
      
    </div>
  )
}