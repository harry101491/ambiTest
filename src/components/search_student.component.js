import React from "react";
var axios = require("axios");
var ShowData = require("./show.component").ShowData;

class SearchStudent extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            studentName: "",
            name: "",
            age: 0,
            gender: "", 
            city:"",
            dataReceived: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            studentName: event.target.value
        });
    }

    handleClick(){

        // sending the get request to the backend server
        // the data came in the handle click is
        console.log(this.state.studentName);

        // axios.get("/search_student", {name: this.state.studentName}).then(function(result){
        //     console.log("the student data has been sent to the backend server");
        // }, function(error){
        //     console.log("somthing went wrong" + error);
        // });
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log("Inside the handle submit function");
        var self = this;
        axios.post("/search_student", {
            name: this.state.studentName
        }).then(function(result){
            console.log("the student data has been sent to the backend server");
            console.dir(result);
            // changing the state object
            self.setState({
                dataReceived: true,
                name: result.data[0].name,
                gender: result.data[0].gender,
                age: result.data[0].age,
                city: result.data[0].city
            });

        }, function(error){
            console.log("somthing went wrong" + error);
        });
    }

    render() {
        return (
            <div className="row search-student-form">
                <form action="/search_student" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="search_teacher"> Search Student </label>
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="search" name="search_teacher" />
                    </div>
                    <button className="btn btn-default"> Search </button>
                </form>
                {(this.state.dataReceived) ? <ShowData name={this.state.name} age={this.state.age} city={this.state.city} gender={this.state.gender}/> : null}
            </div>
        );
    }
}


module.exports.SearchStudent = SearchStudent;