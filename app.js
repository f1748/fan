const express = require("express");
const static = require("express-static");
var app = express();
app.use(static("./html"));

app.listen(80,'192.168.0.108');