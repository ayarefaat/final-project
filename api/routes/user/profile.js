const express= require('express');
const router=express.Router();
const User =require('../../models/user');

//require auth ,then routrt.get('/',auth,(req,res))
router.get('/',(req,res)=>{
    // const currentUserID=auth(req);
    // console.log(currentUserID)
    // console.log(req.user)
    User.findOne({userID:req.user.userID},(err,user)=>{
        if(!err){
            res.json({
                data:user,
                authorized:true,
                message:"successfully find user",
                success:true,
            })
        }else{
            res.json({
                data:null,
                authorized:false,
                message:"Can't find user",
                success:false
            })
        }
    })
});
router.put('/:id',(req,res)=>{
    let id =req.params.id
    console.log(id)
   User.findOneAndUpdate({userID:id},req.body,(err,user)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't update user",
                success:false,
            })
        }else{
            res.json({
                data:user,
                authorized:true,
                message:"successfully updated student",
                success:true
            })
        }
    })
})

module.exports=router;