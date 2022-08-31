

import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./public/demo.html", "UTF-8", (err, html) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.end(html);
        });
    }
    else if (req.url.match("\.css$")) {
        var csspath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(csspath, "UTF-8");
        res.writeHead(200, { "content-type": "text/css" });
        fileStream.pipe(res);
    }
    else if (req.url.match("\.jpeg$")) {
        var imagepath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagepath);
        res.writeHead(200, { "content-Type": "image/jpeg" });
        fileStream.pipe(res);
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("page not found");
    }
}).listen(8081);
console.log("server is working contiune your process.");