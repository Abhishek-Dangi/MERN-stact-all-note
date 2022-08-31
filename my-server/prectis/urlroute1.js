


//http module

import * as http from 'http';

http.createServer((req, res) => {
    var urlroute = "<h2>Click on the links given below</h2><a href='/home'>home</a><br/><br/><a href='/about'>about</a><br/><br/><a href='/contact'>contact</a><br/><br/><a href='/service'>service</a><br/><br/><a href='/register'>register</a><br/><br/><a href='/login'>login</a><br/><br/>"

    //console.log(req.url);
    var msg;
    if (req.url == "/" || req.url == "/home")
        msg = "<h1>/ or /home url invoked</h1>";
    else if (req.url == "/about")
        msg = "<h1>/about url invoked</h1>";
    else if (req.url == "/contact")
        msg = "<h1>/contact url invoked</h1>";
    else if (req.url == "/service")
        msg = "<h1>/service url invoked</h1>";
    else if (req.url == "/register")
        msg = "<h1>/register url invoked</h1>";
    else if (req.url == "/login")
        msg = "<h1>/login url invoked</h1>";
    else
        msg = "<h1>Invalid url invoked</h1>";
    res.write(msg + urlroute);
    res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");





// import * as http from 'http';

// http.createServer((req, res) => {
//     var urlroute = "<h2>Click on the links given below</h2><a href='/home'>home</a><br/><br/><a href='/about'>about</a><br/><br/><a href='/mobile'>mobile</a><br/><br/>"
//     var msg;
//     if (req.url == "/" || req.url == "/home")
//         msg = "<h1>home page</h1>";
//     else if (req.url == "/about")

//         msg = "<h1>about page</h1>";
//     else if (req.url == "/mobile")
//         msg = "<h1>mobile page</h1>";
//     else
//         msg = "<h1>invalid page</h1>";
//     res.write(msg + urlroute);
//     res.end();
// }).listen(8081);
// console.log("you server is work proper");
