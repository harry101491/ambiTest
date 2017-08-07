var config = require("../config");
var mongoose = require("mongoose");
var Teacher = require("./teacher");
var ObjectID = require('mongodb').ObjectID;

mongoose.connect(config.mongodb_url);
var Schema = mongoose.Schema;





module.exports.Student = Student;