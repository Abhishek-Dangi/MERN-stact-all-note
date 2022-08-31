

import * as http from 'http';
import * as url from 'url';

http.createServer((req, res) => {
    var urlobj = url.parse(req.url, true);
    var urlroute = "<h2>Click on the links given below</h2><a href='/home'>home</a><br/><br/><a href='/about'>about</a><br/><br/><a href='/contact'>contact</a><br/><br/><a href='/service'>service</a><br/><br/><a href='/register'>register</a><br/><br/><a href='/login'>login</a><br/><br/>"

    //console.log(req.url);
    var msg;
    if (urlobj.pathname == "/" || urlobj.pathname == "/home")
        msg = "<h1>/ or /home url invoked</h1>";
    else if (urlobj.pathname == "/about")
        msg = "<h1>/about url invoked</h1>";
    else if (urlobj.pathname == "/contact")
        msg = "<h1>/contact url invoked</h1>";
    else if (urlobj.pathname == "/service")
        msg = "<h1>/service url invoked</h1>";
    else if (urlobj.pathname == "/register")
        msg = "<h1>/register url invoked</h1>";
    else if (urlobj.pathname == "/login")
        msg = "<h1>/login url invoked</h1>";
    else
        msg = "<h1>Invalid url invoked</h1>";
    res.write(msg + urlroute);
    res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");
