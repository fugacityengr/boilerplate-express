var express = require("express");
var app = express();

// console.log("Hello World");

// const getHandler = (req, res) => {
//   res.send("Hello Express");
// };
// app.get("/", getHandler);

const getHandler = (req, res) => {
  const file = __dirname + /views/index.html;
  res.send(file);
};
app.get("/", getHandler);

module.exports = app;
