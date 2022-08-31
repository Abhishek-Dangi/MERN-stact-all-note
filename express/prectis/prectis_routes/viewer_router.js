// this is for user information router 
import express from 'express';

const route = express.Router();


route.get("/home", (req, res) => {
    res.send("<h1>This is home page , its is viewer pannel</h1>");
});
route.get("/about", (req, res) => {
    res.send("<h1>This is about page , its is viewer pannel</h1>");
});
route.get("/login ", (req, res) => {
    res.send("<h1>This is login page , its is  pannel</h1>");
});
route.get("/services", (req, res) => {
    res.send("<h1>This is services page , its is user pannel</h1>");
});

export default route;
