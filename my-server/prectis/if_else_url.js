
import * as http from 'http';

http.createServer((req, res) => {
    var msg;
    if (req.url == "/" || req.url == "/home")
        msg = "<h1>/ or /home url invoked</h1>";
    else if (req.url == "/about")
        msg = "<h1>this is about page</h1>";
    else if (req.url == "/service")
        msg = "<h1>this is service page</h1>";
    else if (req.url == "/contact")
        msg = "<h1>this is contact page</h1>";
    else if (req.url == "/game")
        msg = "<h1>this is game page</h1>";
    else
        msg = "<h1>invalid page</h1>";
    res.write(msg);
    res.end();
}).listen(8081);
console.log("process end");