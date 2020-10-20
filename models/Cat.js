const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  age: Number,
  img: String,
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
