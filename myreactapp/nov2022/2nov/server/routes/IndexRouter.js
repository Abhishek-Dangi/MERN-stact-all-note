import express from 'express';
import IndexController from '../controller/IndexController.js';

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
    res.json({"result":result});
 }).catch((err)=>{
    res.json({"result":err});
 });
});

export default router;