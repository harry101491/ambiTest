import React from "react";
var axios = require("axios");

class SearchTeacher extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            teacherName: ""
        };
    }

    handleChange(event) {
        this.setState({
            teacherName: event.target.value
        });
    }   
    
    handleSubmit(event) {
        event.preventDefault();

        axios.post("/search_teacher", {
            teacher: this.state.teacherName
        }).then(function(result){
            console.log("the result is:"+ result);
        }, function(err) {
            console.log("somthing went wrong"+ err);
        });

    }

    render() {
        return (
            <div className="row search-student-form">
                <form action="/search_teacher" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="search_teacher"> Search </label>
                        <input className="form-control" type="text" placeholder="search" name="search_teacher" />
                    </div>
                    <button className="btn btn-default">Search</button>
                </form>
            </div>
        );
    }
}


module.exports.SearchTeacher = SearchTeacher;