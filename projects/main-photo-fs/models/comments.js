const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "users"
    // },
    imageId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "images"
    },
    dateCommented: {
        required: true,
        type: String
    },
    textComment: {
        required: true,
        type: String
    }
})

const CommentModel = mongoose.model("comments", commentSchema);
module.exports = CommentModel;