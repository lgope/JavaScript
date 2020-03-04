const express = require("express");
const app = express();

const courseRouter = require("./routes/courseRoutes");

app.use("/api/courses", courseRouter);

module.exports = app;
