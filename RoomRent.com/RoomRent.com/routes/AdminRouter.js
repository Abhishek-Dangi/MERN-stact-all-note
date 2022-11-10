import express from 'express';
import AdminController from '../controller/AdminController.js';
import * as url from 'url';
const router = express.Router();

router.get("/",(req,res)=>{ 
 res.render("adminhome"); 
});

router.get("/manageusers",(req,res)=>{ 
 AdminController.manageUsers({"role":"user"}).then((result)=>{
  res.render("manageusers",{"userDetails":result});
 }).catch((err)=>{
  console.log(err);   
 })
});

router.get("/manageuserstatus",(req,res)=>{ 
 var urlobj=url.parse(req.url,true).query;  
 AdminController.manageUserStatus(urlobj).then((result)=>{
  res.redirect("/admin/manageusers");
 }).catch((err)=>{
  console.log(err);   
 })
});

export default router;