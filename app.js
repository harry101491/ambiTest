var config = require("./config");
var express = require("express");
var app = express();
var body_parser = require("body-parser");
var mongo_client = require("mongodb").MongoClient;
var mongoose = require("mongoose");
var uniqId = require("uniqid");
var Student = require("./models/schemas").Student;
var Teacher = require("./models/schemas").Teacher;


var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

app.get("/", function(req, res){
    res.render("home");
});

// app.get("/menu", function(req, res){
//     res.render("menu");
// });

mongoose.connect(config.mongodb_url);

app.post("/add_student", function(req, res){
    console.dir(req.body);
    
    // insert in the mongoDB connecting to the database ambi
    var newStudent = new Student({
        id: uniqId(),
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        height: req.body.height,
        city: req.body.city,
        teachers: []
    });

    newStudent.save(function(err, result){
        if(err) {
            console.log("somthing went wrong" + err);
        }
        else
        {
            console.dir(result);
        }
    });

    // console.dir(newStudent);

    // find wheather the student is already present or not by their name

    //console.log("inside post request");
});

app.post("/search_student", function(req, res){
    console.dir(req.body);
    // searching the data and sending the values to the front-end

    Student.find({name: req.body.name}, function(err, data) {
        res.send(data);
    });
});


app.listen(port, function(){
    console.log("the app is listening on port:"+port);
});