var config = require("../config");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// creating the student object schema
var studentSchema = new Schema({
//    id: Number,
    id: {type: String, required:true, unique:true},
    name: {type:String, required:true},
    gender: String,
    age: Number,
    height: Number,
    city: String,
    teachers: [{type: Schema.Types.ObjectId, ref:"Teacher"}]
});

// showing the student data to the console

studentSchema.method.print = function() {
    return "id :" + this._id + " name: " + this.name + " gender: "+ this.gender + " age: "+ this.age + " height: " + this.height 
    + " Number of Teachers: " + this.teachers.length; 
}


// creating the Teacher object schema
var teacherSchema = new Schema({
    id: {type: String, required:true, unique:true},
    // id: Number,
    name: {type:String, required:true},
    gender: String,
    age: Number,
    height: Number,
    city: String,
    students: [{type: Schema.Types.ObjectId, ref:"Student"}]
});

var Teacher = mongoose.model("Teacher", teacherSchema);
var Student = mongoose.model("Student", studentSchema);

module.exports.Teacher = Teacher;
module.exports.Student = Student;