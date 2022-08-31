

import express from 'express';
var app = express();
// import packages

import viewerRoute from './prectis_routes/viewer_router.js';
import adminRoute from './prectis_routes/admin_router.js';
import userRoute from './prectis_routes/user_router.js';

app.use("/", viewerRoute);
app.use("/admin", adminRoute);
app.use("/user", userRoute);


app.listen(3000);
console.log("your server is working properly");
