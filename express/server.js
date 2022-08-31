import express from 'express';

var app=express();

app.get("/",(req,res)=>{ 
 res.send("<h1>Its Express server working</h1>"); 
});

app.listen(3000);
console.log("server invoked at link http://localhost:3000"); 
