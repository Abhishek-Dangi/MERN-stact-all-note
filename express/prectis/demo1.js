
import express from 'express';

var app = express();

app.get("/", (req, res) => {
    res.send("<h1>this is home page</h1>")
});
app.get("/about", (req, res) => {
    res.send("<h1>this is about page</h1>")
});
app.get("/service", (req, res) => {
    res.send("<h1>this is service page</h1>")
});
app.get("/login", (req, res) => {
    res.send("<h1>this is login  page</h1>")
});

app.listen(3000);
console.log("server invoke ......");