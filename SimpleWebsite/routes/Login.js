const path =require("path");
const express =require("express");
const router=express.Router();
router.get("/Cart",(req,res,next)=>{
 res.sendFile(path.join(__dirname,"../","views","Cart.html"));
});
module.exports=router;