const express=require("express");
const router=express.Router();
const {backtohome,edithome,deletetask,showabout}=require("../controllers/home");

router.get("/",backtohome);

router.get("/about",showabout);

router.post("/add",edithome);

router.post("/delete_task",deletetask);

module.exports=router;