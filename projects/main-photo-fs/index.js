const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");

const coursesRouter = require("./routes/courses.js");
const videosRouter = require("./routes/videos.js");
const lessonRouter = require("./routes/lessons.js");
const assignmentRouter = require("./routes/assignments.js");
const imageRouter = require("./routes/images.js");
const commentRouter = require("./routes/comments.js");
const noteRouter = require("./routes/notes.js");
const favoriteRouter = require("./routes/favorites.js");
// const exampleUserRouter = require("./routes/examplesUsers.js");
const userRouter = require("./routes/users.js");

const app = express();

const port = 3001;

//middleware
app.use(bodyParser.json());
app.use(logger);

//routes
app.use("/courses", coursesRouter);
app.use("/videos", videosRouter);
app.use("/lessons", lessonRouter);
app.use("/assignments", assignmentRouter);
app.use("/images", imageRouter);
app.use("/comments", commentRouter);
app.use("/notes", noteRouter);
app.use("/favorites", favoriteRouter);
// app.use("/examples", exampleUserRouter);
app.use("/users", userRouter);

//db
mongoose.connect("mongodb://localhost:27017/learn-photography", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
});

//server
app.listen(port, () => console.log("Server running on port: " + port));

