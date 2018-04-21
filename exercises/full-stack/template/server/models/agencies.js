const mongoose = require("mongoose");

const { Schema } = mongoose;

//Schema is a constructor
// determines the template for all documents in a collection

const agencySchema = new Schema({
    name: String,
    location: String
})

module.exports = mongoose.model("agencies", agencySchema);;
