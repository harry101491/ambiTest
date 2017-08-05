var config = require("./config");
var express = require("express");
var app = express();
var body_parser = require("body-parser");

var port = process.env.PORT || 3000;
var data = require("./src/testData.json");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

app.get("/", function(req, res){
    res.render("home");
});

app.listen(port, function(){
    console.log("the app is listening on port:"+port);
});