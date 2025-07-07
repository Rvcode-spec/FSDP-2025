exports.login = asyncHandler(aysnc(req, resp, next)=>{
    
})

const {email, password } = req.body;

    const existingAdmin = await Admin.findOne({email});
    if(!existingAdmin) return resp.status(403).send("Admin Not Found");