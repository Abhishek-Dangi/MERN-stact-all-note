// reduce code

import * as http from 'http';

http.createServer((r, s) => {
    s.write("<h1>hello welcome  8081</h1>");
    s.end();
}).listen(8081, (error) => {
    if (error)
        console.log(error);
    else
        console.log("you prosses is done");
});