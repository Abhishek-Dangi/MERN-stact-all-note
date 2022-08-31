import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/about", (req, res) => {
    var a, b, c;
    a = 100;
    b = 200;
    c = a + b;

    var mks = [34, 56, 78, 90, 87];

    var empDetails = { "eno": 1001, "edes": "trainer", "edob": 1067 }

    res.render("about", { "a": a, "b": b, "c": c, "mks": mks, "empDetails": empDetails });
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/service", (req, res) => {
    var users = [{ "uid": 1001, "unm": "test1@gmail.com", "upass": 123 }, { "uid": 1002, "unm": "test2@gmail.com", "upass": 456 }, { "uid": 1003, "unm": "test3@gmail.com", "upass": 789 }];
    res.render("service", { "users": users });
});

router.get("/register", (req, res) => {
    res.render("register");
});
router.put("/register", (req, res) => {
    res.render("register");
});

router.get("/login", (req, res) => {
    res.render("login");
});

export default router;