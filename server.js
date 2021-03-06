require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const app = express();
// const PORT = process.env.PORT;
const { PORT = 3000, NODE_ENV = "development" } = process.env;

const cors = require("cors");
const corsOptions = require("./configs/cors");

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());

// app.use(cors());

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

const ownerRouter = require("./controllers/Owner.js");
app.use("/owners", ownerRouter);

const catRouter = require("./controllers/Cat.js");
app.use("/cats", catRouter);

app.listen(PORT, () => {
  console.log(`listening in on port: ${PORT}`);
});
