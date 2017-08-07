import React from "react";
// var React = require("react");
var axios = require("axios");

class AddStudent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            gender: "",
            age: 0,
            height:"",
            city:""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(event){
        this.setState({
            city: event.target.value
        });
    }

    onHeightChange(event){
        this.setState({
            height:event.target.value
        });
    }

    onAgeChange(event) {
        this.setState({
            age:event.target.value
        });
    }

    onNameChange(event){
        this.setState({
            name:event.target.value
        });
    }   
    
    onRadioChange(event) {
        this.setState({
            gender:event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //sending the post request to server by axios
        axios.post("/add_student", this.state).then(function(result){
            console.log(result);
        }, function(err){
            console.log("somthing has went wrong");
        });   

        console.dir(this.state);
        console.log("Inside the click Event");
    }

    render() {
        return (
            <div className="add-student-wrapper">
                <form action="/add_student" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={this.onNameChange} type="text" className="form-control" id="name" placeholder="Full Name" />
                    </div>
                    <label className="gender-label">Gender</label>
                    <div className="radio-inline">
                        <label>
                            <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.onRadioChange}/>
                            Male
                        </label>
                    </div>
                    <div className="radio-inline">
                        <label>
                            <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.onRadioChange}/>
                            Female
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input onChange={this.onAgeChange} type="text" className="form-control" id="age" placeholder="Age" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="height">Height</label>
                        <input onChange={this.onHeightChange} type="text" className="form-control" id="height" placeholder="Height" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input onChange={this.onCityChange} type="text" className="form-control" id="city" placeholder="City" />
                    </div>
                    <button className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}


module.exports.AddStudent = AddStudent;