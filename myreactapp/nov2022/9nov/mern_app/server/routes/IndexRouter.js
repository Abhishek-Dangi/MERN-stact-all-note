import express from 'express';
import IndexController from '../controller/IndexController.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get("/",(req,res)=>{ 
 res.send("<h1>Express server working</h1>"); 
});


router.post("/register",(req,res)=>{
 //console.log(req.body);
 IndexController.userRegister(req.body).then((result)=>{
  res.json({"result":"User register successfully...."});  
 }).catch((err)=>{
  res.json({"result":err});
 });
});

router.post("/login",(req,res)=>{
 IndexController.userLogin(req.body).then((result)=>{
    if(result.rescode==0)
        res.json({"token":"error"});
    else
    {
        let payload={"subject":result.userDetails.email};
        let token=jwt.sign(payload,"my pet name is shanky");
        res.json({"token":token,"userDetails":result.userDetails});
    }    

    /*if(result.rescode==1 || result.rescode==2)
    {
     req.session.sunm=result.userDetails.email;
     req.session.srole=result.userDetails.role;

     if(req.body.chk!=undefined)
     {
      res.cookie("cunm",result.userDetails.email,{maxAge : 3600000});
      res.cookie("cpass",result.userDetails.password,{maxAge : 3600000});    
     }
    }*/
 }).catch((err)=>{
    res.json({"token":"error"});
 });
});

export default router;