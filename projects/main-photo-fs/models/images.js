const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
    assignId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "assignments"
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
