

// to connect server page we load html file using content-type text/html. that is use to upload a page by link track

import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';

http.createServer((req, res) => {
    var urlobj = url.parse(req.url, true)
    var file_content;

    if (urlobj.pathname == "/" || urlobj.pathname == "/home")
        file_content = fs.readFileSync("./home.html");
    else if (urlobj.pathname == "/about")
        file_content = fs.readFileSync("./about.html");
    else if (urlobj.pathname == "/contact")
        file_content = fs.readFileSync("./contact");
    else if (urlobj.pathname == "/services")
        file_content = fs.readFileSync("./services.html");
    else if (urlobj.pathname == "/login")
        file_content = fs.readFileSync("login.html");
    else
        file_content = fs.readFileSync("./home.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.write(file_content);
    res.end();
}).listen(8081);
console.log("check on server http:/localhost/8081/");
