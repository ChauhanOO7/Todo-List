const {getUser}=require("../services/mapping");

function checkloggedin(req,res,next){

    const Uid=req.cookies?.uid;

    if(!Uid)    return res.render("loginup");

    const user=getUser(Uid);

    if(!user)   return res.render("loginup");

    req.user=user;
    next();
}

module.exports={checkloggedin};