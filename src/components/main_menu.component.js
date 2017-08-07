import React from "react";

var SearchTeacher = require("./search_teacher.component").SearchTeacher;
var SearchStudent = require("./search_student.component").SearchStudent;
var AddTeacher = require("./add_teacher.component").AddTeacher;
var AddStudent = require("./add_student.component").AddStudent;
var BrowserRouter = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;


class MainMenu extends React.Component{
    render() {
        return (
            {/*<BrowserRouter>
            <div>
                <ul className="nav nav-tabs nav-justified">
                    <li><Link to="/add_student">Add Student</Link></li>
                    <li><Link to="/add_teacher">Add Teacher</Link></li>
                    <li><Link to="/search_student">Search Teacher</Link></li>
                    <li><Link to="/search_student">Search Student</Link></li>
                </ul>
                <Route path="/add_student" component={AddStudent} />
                <Route path="/add_teacher" component={AddTeacher} />
                <Route path="/search_student" component={SearchStudent} />
                <Route path="/search_teacher" component={SearchTeacher} />
            </div>
            </BrowserRouter>*/}
        );
    }
}


module.exports.MainMenu = MainMenu;