
import express from 'express';

const route = express.Router();


route.get("/password", (req, res) => {
    res.send("<h1>This is password page , its is admin pannel</h1>");
});
route.get("/repassword", (req, res) => {
    res.send("<h1>This is repassword page , its is admin pannel</h1>");
});
route.get("/name", (req, res) => {
    res.send("<h1>This is name page , its is admin pannel</h1>");
});
route.get("/surname", (req, res) => {
    res.send("<h1>This is suraname page , its is admin pannel</h1>");
});
route.get("/confirm", (req, res) => {
    res.send("<h1>This is confirm page , its is admin pannel</h1>");
});

export default route;
