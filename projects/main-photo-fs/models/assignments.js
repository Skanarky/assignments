const mongoose = require("mongoose");

const { Schema } = mongoose;

const assignmentSchema = new Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "users"
    // },
    lessonId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "lessons"
    },
    dateEnrolled: {
        required: true,
        type: String
    }
})

const AssignmentModel = mongoose.model("assignments", assignmentSchema);
module.exports = AssignmentModel;