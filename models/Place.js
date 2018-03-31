var mongoose = require("mongoose");

var PlaceSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String
});

module.exports = mongoose.model("Place", PlaceSchema);