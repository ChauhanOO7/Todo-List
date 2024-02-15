const {getUser}=require("../services/mapping");

function checkloggedin(req,res,next){

    const Uid=req.cookies?.uid;

    if(!Uid)    return res.json({"error":"not present"});

    const user=getUser(Uid);

    if(!user)   return res.json({"error":"user not present"});

    req.user=user;
    next();
}

function checkauth(req,res,next)
{
    const Uid=req.cookies?.uid;
    const user=getUser(Uid);

    req.user=user;
    next();
}

module.exports={checkloggedin,checkauth};