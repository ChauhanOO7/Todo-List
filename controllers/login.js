const {users}=require("../models/signup");
const { v4: uuidv4 } = require('uuid');
const {setUser}=require("../services/mapping");

async function handlelogin(req,res)
{
    const Email=req.body.email;
    const pass=req.body.password;
    const user=await users.findOne({email:Email,password:pass});

    if(!user)   return res.redirect(301,"/signup");

    const uid=uuidv4();
    res.cookie("uid",uid);
    setUser(uid,user);

    return res.redirect(301,"/");

}

module.exports={handlelogin};