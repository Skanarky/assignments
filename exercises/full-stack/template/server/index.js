const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");

const catRouter = require("./routes/cats.js");
const agencyRouter = require("./routes/agencies.js");

const app = express();
const port = 8080;

//middleware
app.use(bodyParser.json());
app.use(logger);

//routes
app.use("/cats", catRouter);
app.use("/agencies", agencyRouter);

mongoose.connect("mongodb://localhost:27017/animals", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port " + port));

