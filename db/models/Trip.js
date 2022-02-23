const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  image: { type: String },
});
module.exports = mongoose.model("Trip", TripSchema);
