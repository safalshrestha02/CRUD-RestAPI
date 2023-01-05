const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const userRoutes = require("./routes/getUsers");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRoutes);

app.get("/", (req, res, next) => {
  //  console.log(users);
  res.send("hello");
});

app.listen(3000);
