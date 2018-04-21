const express = require("express");
const app = express();

const hunterRouter = require("./routes/bountyHunters.js")

const bodyParser = require("body-parser");
const logger = require("./middleware/logger.js");
const port = 3001;

//MIDDLEWARE
app.use(bodyParser.json());
app.use(logger)

//routes
app.use("/hunters", hunterRouter);


//server
app.listen(port, () => console.log(`The Bounty Hunter server is running on port: ${port}`));