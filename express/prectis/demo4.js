import express from 'express';
var app = express();

app.use("/about", (req, res, next) => {
    console.log("application level dependency ");
    next();
});

app.get("/about", (req, res) => {
    res.send("<h1>This is about page we are use app.use function </h1>");
});

app.listen(3000);
console.log("server invoke");