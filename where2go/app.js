var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("SERVER ROOT");
});

app.listen(3000);