//middleware
import express from 'express';

var app=express();

//application level middleware for specific routes
app.use("/about",(req,res,next)=>{
 console.log("Application level middleware working"); 
 next();
});


//application level middleware for all routes
/*app.use((req,res,next)=>{
 console.log("Application level middleware working"); 
 next();
});

app.use("/",(req,res,next)=>{
 console.log("Application level middleware working"); 
 next();
});*/

app.get("/",(req,res)=>{ 
 res.send("<h1>/ or /home url invoked</h1>"); 
});

app.get("/about",(req,res)=>{ 
 res.send("<h1>/about url invoked</h1>"); 
});

app.listen(3000);
console.log("server invoked at link http://localhost:3000"); 
