import React from "react";
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

class AddTeacher extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            name: "",
            gender: "",
            age: 0,
            height:"",
            city:"",
            students: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.handleAddMoreStudent = this.handleAddMoreStudent.bind(this);
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
        // send the data directly to api
    }

    handleAddMoreStudent(event) {
        console.log("Inside the handle Add More Student");
        console.dir(event);
        // this.setState({
        //     obj: {
        //         name:this.state.name,
        //         gender: this.state.gender,
        //         age: this.state.age,
        //         height: this.state.height,
        //         city:this.state.city,
        //         students:[]
        //     }
        // });
    }

    render() {
        return (
            <div className="add-teacher-wrapper">
                <form action="/add_teacher" onSubmit={this.handleSubmit}>
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
                    <Link to="/add_more_student"><button onClick={this.handleAddMoreStudent} className="btn btn-default col-md-offset-1">Add Student</button></Link>


                </form>
            </div>
        );
    }
}


module.exports.AddTeacher = AddTeacher;