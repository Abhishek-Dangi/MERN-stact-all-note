// creat server

import * as http from 'http';

var server = http.createServer((req, res) => {
    res.write("<h1>hello welcome on web server on 8081</h1>");
    res.end();
});

server.listen(8081, (error) => {
    if (error)
        console.log(error);
    else
        console.log("you prosses is done");
});
