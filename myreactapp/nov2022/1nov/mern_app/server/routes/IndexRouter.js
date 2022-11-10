import express from 'express';
import IndexController from '../controller/IndexController.js';

const router = express.Router();

router.get("/",(req,res)=>{ 
 res.send("<h1>Express server working</h1>"); 
});


router.post("/register",(req,res)=>{
 console.log(req.body);
 res.json({"result":"success"})     
 /*IndexController.userRegister(req.body).then((result)=>{
  res.render("register",{"output":"User register successfully...."});  
 }).catch((err)=>{
  res.render("register",{"output":err});
 });*/
});

router.post("/login",(req,res)=>{
 IndexController.userLogin(req.body).then((result)=>{
    if(result.rescode==1 || result.rescode==2)
    {
     req.session.sunm=result.userDetails.email;
     req.session.srole=result.userDetails.role;

     if(req.body.chk!=undefined)
     {
      res.cookie("cunm",result.userDetails.email,{maxAge : 3600000});
      res.cookie("cpass",result.userDetails.password,{maxAge : 3600000});    
     }

    }

    result.rescode==0
    ?res.render("login",{"output":"Invalid user or verify account...."})
    :(result.rescode==1
        ?res.redirect("/admin")
        :res.redirect("/user"));
 }).catch((err)=>{
    res.render("login",{"output":err,"cunm":cunm,"cpass":cpass});
 });
});

export default router;