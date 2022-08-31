/* page loading */

import * as http from 'http'; 
import * as url from 'url'; 
import * as fs from 'fs';

http.createServer((req,res)=>{
 res.writeHead(200,{"content-type":"text/html"});
 var file_content=fs.readFileSync("./views/demo.html");
 res.write(file_content);
 res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");