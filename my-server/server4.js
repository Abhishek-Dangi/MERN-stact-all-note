/* URL routing : It is a mechanism to redirect from one application URL to another */

import * as http from 'http'; 

http.createServer((req,res)=>{
 var urlroute="<h2>Click on the link below to redirect</h2><a href='/home'>Home page</a><br/><br/><a href='/about'>About page</a><br/><br/><a href='/contact'>Contact page</a><br/><br/><a href='/service'>Service page</a><br/><br/><a href='/register'>Register page</a><br/><br/><a href='/login'>Login page</a><br/><br/>";

 var msg;
 if(req.url=="/" || req.url=="/home")
    msg="<h1>/ or /home url invoked</h1>";
 else if(req.url=="/about")
    msg="<h1>/about url invoked</h1>";
 else if(req.url=="/contact")
    msg="<h1>/contact url invoked</h1>";
 else if(req.url=="/service")
    msg="<h1>/service url invoked</h1>";
 else if(req.url=="/register")
    msg="<h1>/register url invoked</h1>";
 else if(req.url=="/login")
    msg="<h1>/login url invoked</h1>";
 else
    msg="<h1>Invalid url invoked</h1>";                      
 res.write(msg+urlroute);
 res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");