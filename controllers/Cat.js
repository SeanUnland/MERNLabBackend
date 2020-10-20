const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Cat = require("../models/Cat");
const db = mongoose.connection;

// route to list all cats
router.get(`/`, async (req, res) => {
  const cat = await Cat.find({});
  res.json({
    status: 200,
    data: cat,
  });
});

// CREATE route - POST
router.post(`/`, async (req, res) => {
  const cat = await Cat.create(req.body);
  res.json({ status: 200, data: cat });
});

// UPDATE route - PUT
router.put("/:id", async (req, res) => {
  const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({
    status: 200,
    message: "item updated",
    data: cat,
  });
});

// DELETE route - delete
router.delete(`/:id`, async (req, res) => {
  const cat = await Cat.findByIdAndDelete(req.params.id);
  res.json({ status: 200, message: "item deleted", data: cat });
});

module.exports = router;
