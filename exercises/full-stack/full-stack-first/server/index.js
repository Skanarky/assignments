const express = require("express");
const app = express();

const toDoRouter = require("./routes/toDos.js")

const bodyParser = require("body-parser");
const logger = require("./middleware/logger.js");
const port = 3005;

// format
// {
//     "name": "The name",
//     "description": "The description of the todo",
//     "imageUrl": "http://www.myimage....",
//     "completed": false
//     after MY id maker... uniqueIdGen()
//     "_id": "23k4lh23h2"
// }

//MIDDLEWARE handling parsing info ->  middlewareFn(req, res, next) !
app.use(bodyParser.json());
app.use(logger)

//routes

app.use("/todos", toDoRouter);



//server
app.listen(port, () => console.log(`The ToDos Server is listening on port: ${port}`));