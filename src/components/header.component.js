import React from "react";
var BrowserRouter = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

class Header extends React.Component {

    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-offset-4 col-md-4 heading">
                        <h1> Ambi Test </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 main-menu">
                        <ul className="nav nav-tabs nav-justified">
                            <li><Link to="/add_student">Add Student </Link></li>
                            <li><Link to="/add_teacher">Add Teacher</Link></li>
                            <li><Link to="/search_teacher">Search Teacher</Link></li>
                            <li><Link to="/search_student">Search Student</Link></li>
                        </ul>
                    </div>
                </div> 
            </div>
        );
    }
}

module.exports.Header = Header;