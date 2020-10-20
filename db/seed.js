const mongoose = require("./connection");
const Owner = require("../models/Owner");
const Cat = require("../models/Cat");

const db = mongoose.connection;

Cat.deleteMany({}).then(() => {
  Cat.insertMany(manyCats).then((cats) => {
    console.log(`cats`, cats);
    db.close();
  });
});

Owner.deleteMany({}).then(() => {
  Owner.insertMany(manyOwners).then((owners) => {
    console.log(`owners`, owners);
    db.close();
  });
});
