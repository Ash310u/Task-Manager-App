// I just want Express application before listen to be called, To make request using supertest. And that's why I create app.js and export it.

const express = require("express");
const cors = require("cors")
require("./db/mongoose");
const userRouter = require('./routers/user')
const topicRouter = require('./routers/topic');
const taskRouter = require('./routers/task');

const app = express();

app.use(cors({
    origin:'https://task-manager-app-gilt-three.vercel.app'
    // origin:'http://localhost:3000'
}));
app.use(express.json());
app.use(taskRouter)
app.use(topicRouter)
app.use(userRouter);

module.exports = app