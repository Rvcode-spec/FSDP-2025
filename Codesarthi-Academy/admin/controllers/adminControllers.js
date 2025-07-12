const Admin = require('../config/admin');



exports.login = async (req, resp)=>{

    const {email , password} = req.body;

    try{
            const admin = await Admin.findOne({email});
            if(!admin) return resp.status(400).send("Invalid Email");

            const adminAuth = await Admin.findOne({password});
            if(!adminAuth){
                resp.status(402).send('Login failed')

            }else{

                resp.status(200).json({ message: "Admin Login Successful",})

            }
        
    }catch(error){
        
       console.error("Login error:", error);
        return resp.status(500).send("Server Error");

    }

}