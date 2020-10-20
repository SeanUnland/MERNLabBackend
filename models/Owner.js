const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: String,
  age: Number,
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
