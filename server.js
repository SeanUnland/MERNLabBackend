require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    msg: "you have hit the default route...nothing to see here",
  });
});

const ownerRouter = require("./controllers/ownerRoutes");
app.use("/owners", ownerRouter);

const catRouter = require("./controllers/catRoutes");
app.use("/cats", catRouter);

app.use(cors());

app.listen(PORT, () => {
  console.log(`listening in on port: ${PORT}`);
});
