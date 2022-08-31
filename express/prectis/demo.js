

import express from 'express';


var app = express();

app.get("/", (req, res) => {
    res.send("<h1>this is express page</h1>");

});

app.listen(3000);
console.log("sever is invoke");