const path =require("path");
const express =require("express");
const router=express.Router();
const rootPath=require("../utility/path");
router.get("/",(req,res,next)=>{
 res.sendFile(path.join(rootPath,"views","index.html"));
});
router.get("/login",(req,res,next)=>{
 res.sendFile(path.join(rootPath,"views","login.html"));
});
module.exports=router;