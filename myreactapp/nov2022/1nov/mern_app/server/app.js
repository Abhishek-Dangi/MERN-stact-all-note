import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';

var app=express();

//to resolve cross origin problem
app.use(cors());

//to extract post data
app.use(bodyparser());

// to get router
import IndexRouter from './routes/IndexRouter.js';
import AdminRouter from './routes/AdminRouter.js';
import UserRouter from './routes/UserRouter.js';

//route level middleware to load specific route as per user
app.use("/webapiadmin",AdminRouter);
app.use("/webapiuser",UserRouter);
app.use("/webapi",IndexRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001"); 
