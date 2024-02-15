const express=require("express");
const router=express.Router();
const {backtohome,edithome,deletetask,showabout}=require("../controllers/home");
const {checkloggedin,checkauth}=require("../middleware/loggedin");

router.get("/",backtohome);

router.get("/about",showabout);

router.post("/add",checkloggedin,edithome);

router.post("/delete_task",deletetask);



module.exports=router;