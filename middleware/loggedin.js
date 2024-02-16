const {getUser}=require("../services/mapping");

function checkloggedin(req,res,next){

    const Uid=req.cookies?.uid;

    if(!Uid)    return res.render("login");

    const user=getUser(Uid);

    if(!user)   return res.render("login");

    req.user=user;
    next();
}

module.exports={checkloggedin};