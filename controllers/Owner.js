const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Owner = require("../models/Owner");
const db = mongoose.connection;

// route to list all owners
router.get(`/`, async (req, res) => {
  const owner = await Owner.find({});
  res.json({
    status: 200,
    data: owner,
  });
});

// CREATE route - POST
router.post(`/`, async (req, res) => {
  const owner = await Owner.create(req.body);
  res.json({ status: 200, data: owner });
});

// UPDATE route - PUT
router.put("/:id", async (req, res) => {
  const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({
    status: 200,
    message: "item updated",
    data: owner,
  });
});

// DELETE route - delete
router.delete(`/:id`, async (req, res) => {
  const owner = await Owner.findByIdAndDelete(req.params.id);
  res.json({ status: 200, message: "item deleted", data: owner });
});

module.exports = router;
