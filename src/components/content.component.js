import React from "react";
var axios = require("axios");

class Content extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleClick(){
        // sending the data to the server by axios        
        axios.post("/user",{
            user_name: this.state.inputValue
        }).then(function(res){
            console.log(res);
        }, function(err){
            console.log(err);
        });

    }

    render() {
        return (
            <div className="row username-wrapper">
                <div className="col-xs-offset-3 col-xs-6 col-md-offset-4 col-md-4">
                        <div className="form-group">
                            <lable htmlFor="username">User Name </lable>
                            <input className="form-control" type="text" id="username" onChange={this.handleChange} placeholder="Enter Name to Play" />
                        </div>
                        <div className="row">
                            <a href="#getData"><button onClick={this.handleClick} className="btn btn-default col-xs-offset-4 col-sm-offset-5 col-md-offset-5">Play!</button></a>
                        </div>
                </div> 
            </div>
        );
    }
}

export default Content;