// static file loading(js , css , images , fonts..)

import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./public/demo.html", "UTF-8", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }
    else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);

    }
    else if (req.url.match("\.jpeg$")) {
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        fileStream.pipe(res);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
    }
}).listen(8081);
console.log("server invoked at link http://localhost:8081");
