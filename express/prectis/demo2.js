

import express from 'express';

var app = express();

app.get("/", (req, res) => {
    res.send("<h1>this is home page</h1>");

});

app.get("/about", (req, res) => {
    res.send("<h1>this is about page</h1>");

});

app.get("/login", (req, res) => {
    res.send("<h1>this is login page</h1>");

});
app.get("/service", (req, res) => {
    res.send("<h1>this is service page</h1>");

});
app.post("/service", (req, res) => {
    res.send("<h1>this is service page, post method </h1>");

});

app.delete("/service", (req, res) => {
    res.send("<h1>this is service page, delete method</h1>");

});

app.put("/service", (req, res) => {
    res.send("<h1>this is service page, put method</h1>");

});

app.listen(3000);
console.log("server is invoke ");



