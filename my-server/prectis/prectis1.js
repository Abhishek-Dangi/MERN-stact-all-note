// // http module

// import * as http from 'http';


// http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h2>this is web page</h2>");
//     res.end();
// }).listen(8081);
// console.log("server is created");







import * as http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>this is web page</p>");
    res.end();
}).listen(8081);
console.log("server is created");
