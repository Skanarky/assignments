const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");

const issueRouter = require("./routes/issues.js");
const commentRouter = require("./routes/comments.js");

const app = express();
const port = 3001;

//middleware
app.use(bodyParser.json());
app.use(logger);

//routes
app.use("/issues", issueRouter);
app.use("/comments", commentRouter);

mongoose.connect("mongodb://localhost:27017/rock-vote", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port " + port));

