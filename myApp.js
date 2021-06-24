var express = require("express");
var app = express();

// console.log("Hello World");

// const getHandler = (req, res) => {
//   res.send("Hello Express");
// };
// app.get("/", getHandler);

const getHandler = (req, res) => {
  const file = __dirname + "/views/index.html";
  res.sendFile(file);
};
app.get("/", getHandler);

const assets = __dirname + "/public";
app.use("/public", express.static(assets));

module.exports = app;
