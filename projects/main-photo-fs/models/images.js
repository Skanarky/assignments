const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "users"
    // },
    assignId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "assignments"
    },
    lessonId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "lessons"
    },
    imageUrl: {
        required: true,
        type: String
    },
    likes: Number,
    dateUpload: {
        required: true,
        type: String
    }
})

const ImageModel = mongoose.model("images", imageSchema);
module.exports = ImageModel;
