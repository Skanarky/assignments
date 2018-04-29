const mongoose = require("mongoose");

const { Schema } = mongoose;

const favoriteSchema = new Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "users"
    // },
    imageId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "images"
    },
    videoInfo: Object,
    courseInfo: Object
})

const FavoriteModel = mongoose.model("favorites", favoriteSchema);
module.exports = FavoriteModel;