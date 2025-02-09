const path =require("path");
const express =require("express");
const router=express.Router();
router.post("/Contact",(req,res,next)=>{
 res.sendFile(path.join(__dirname,"../","views","Contact.html"));
});
module.exports=router;