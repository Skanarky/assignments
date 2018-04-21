const express = require("express");
const bodyParser = require("body-parser");

const courseRouter = require("./routes/course.js");

const app = express();
const port = 3001;

//middleware
app.use(bodyParser.json());

//routes
app.use("/courses", courseRouter);

// server On
app.listen(port, () => console.log("Server running on port " + port));

