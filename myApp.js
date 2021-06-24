var express = require("express");
var app = express();

console.log("Hello World");

const getHandler = (req, res) => {
  res.send("Hello Express");
};
app.get("/", getHandler);

module.exports = app;
