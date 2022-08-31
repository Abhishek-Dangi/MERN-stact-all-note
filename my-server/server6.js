/* URL routing & Method checking */

import * as http from 'http'; 
import * as url from 'url'; 

http.createServer((req,res)=>{
 var urlobj=url.parse(req.url,true);  
 var urlroute="<h2>Click on the link below to redirect</h2><a href='/home'>Home page</a><br/><br/><a href='/about'>About page</a><br/><br/><a href='/contact'>Contact page</a><br/><br/><a href='/service'>Service page</a><br/><br/><a href='/register'>Register page</a><br/><br/><a href='/login'>Login page</a><br/><br/>";

 var msg;
 if(urlobj.pathname=="/" || urlobj.pathname=="/home")
    msg="<h1>/ or /home url invoked</h1>";
 else if(urlobj.pathname=="/about")
    msg="<h1>/about url invoked</h1>";
 else if(urlobj.pathname=="/contact")
    msg="<h1>/contact url invoked</h1>";
 else if(urlobj.pathname=="/service")
 {
    if(req.method=="GET") 
    {
        console.log("Username : "+urlobj.query.username);
        console.log("Password : "+urlobj.query.password);
        msg="<h1>/service url invoked & method GET</h1>";
    }    
    else if(req.method=="POST") 
        msg="<h1>/service url invoked & method POST</h1>";
    else if(req.method=="PUT") 
        msg="<h1>/service url invoked & method PUT</h1>";
    else if(req.method=="DELETE") 
        msg="<h1>/service url invoked & method DELETE</h1>";
    else
        msg="<h1>/service url invoked & method Anonymous</h1>";            
 }   
 else if(urlobj.pathname=="/register")
    msg="<h1>/register url invoked</h1>";
 else if(urlobj.pathname=="/login")
    msg="<h1>/login url invoked</h1>";
 else
    msg="<h1>Invalid url invoked</h1>";                      
 res.write(msg+urlroute);
 res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");