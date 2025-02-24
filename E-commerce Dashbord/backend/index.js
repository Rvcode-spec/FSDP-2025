const express =require('express')
require("./DB/config");
const User = require("./DB/user");
const cors = require('cors');
const AddProduct = require('./DB/Add-Product');

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors())

app.post('SignUp', async(req,resp)=>{
    let user =new user(req.body)
    resp.send("set")
})

app.post('/Add-Product', async (req, resp) => {
    console.log("Incoming Data:", req.body)
    
    let product = new AddProduct(req.body);
    let result = await product.save();
    resp.send(result)
  })

  app.listen(5000, () => {
    console.log("App Successfully Running on Port 5000");
  });