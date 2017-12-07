var express = require('express');
var logger = require('morgan');
var path = require('path');
var http = require('http');
var bodyParser = require("body-parser");

var app = express();


app.use(express.static(__dirname + '/assets'));


// app.set("views", path.resolve(__dirname, "assets"));
// app.set("view engine", "ejs");

app.use(logger("dev"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/assets/index.html'));
    //__dirname : It will resolve to your project folder.
});



app.use(function (req, res) {
    res.sendFile("index.html");
});



app.use(function (req, res) {
    res.statusCode = 404;
    res.end("404!");
});


http.createServer(app).listen(3000, function () {
    console.log("App is running on port 3000");
});