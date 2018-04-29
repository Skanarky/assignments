const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    dateSignUp: {
        required: true,
        type: String
    }
})

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
