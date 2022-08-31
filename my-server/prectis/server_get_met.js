// GET method using in this program

import * as http from 'http';
import * as url from 'url';

http.createServer((req, res) => {
    var urlobj = url.parse(req.url, true);
    var urlroute = "<h2>click on link for new path</h2><a href='/home'>home link</a><br/><br/><a href='/about'>about link</a><br/><br/><a href='/service'>service link</a><br/><br/><a href='/contact'>contact link</a><br/><br/>";
    var msg;
    if (urlobj.pathname == "/" || urlobj.pathname == "/home")
        msg = "<h1>this is home page link invoke</h1>";
    else if (urlobj.pathname == "/about")
        msg = "<h1>this is about page link invoke</h1>";
    else if (urlobj.pathname == "/service") {
        if (req.method == "GET") {
            console.log("username :" + urlobj.query.username);
            console.log("password :" + urlobj.query.password);
            msg = "<h1>GET method is invoke</h1>";
        }
        else if (req.method == "POST")
            msg = "<h1>POST method is invoke</h1>";

        else if (req.method == "PUT")
            msg = "<h1>PUT method is invoke</h1>";

        else if (req.method == "DELETE")
            msg = "<h1>DELETE method is invoke</h1>";

        else
            msg = "<h1>method is ananomus invoke</h1>";
    }

    else if (urlobj.pathname == "/contact")
        msg = "<h1>this is contact page link invoke</h1>";
    else
        msg = "<h1>this is invalid page link invoke</h1>";
    res.write(msg + urlroute);
    res.end();

}).listen(8081);
console.log("you server is start");
