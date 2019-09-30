var express = Require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socker.io").listen(server);

users = [];
connections = [];

server.listen(process.env.PORT || 3000);

console.log("Server Running....");
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
