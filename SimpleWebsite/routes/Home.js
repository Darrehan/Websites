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
router.get("/dashboard",(req,res,next)=>{
 res.sendFile(path.join(rootPath,"views","dashboard.html"));
});
router.get("/blog",(req,res,next)=>{
 res.sendFile(path.join(rootPath,"views","blog.html"));
});
module.exports=router;