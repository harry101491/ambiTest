import React from "react";
var axios = require("axios");
var BrowserRouter = require("react-router-dom").BrowserRouter;
var Route = require("react-router-dom").Route;
var Link = require("react-router-dom").Link;
var Switch = require("react-router-dom").Switch;
var AddStudent = require("./add_student.component").AddStudent;
var AddTeacher = require("./add_teacher.component").AddTeacher;
var SearchStudent = require("./search_student.component").SearchStudent;
var SearchTeacher = require("./search_teacher.component").SearchTeacher;
var AddMoreStudent = require("./add_more_student.component").AddMoreStudent;

class Content extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue : ""
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        // this.setState({
        //     inputValue: event.target.value
        // });
    }

    handleClick(){

        // // sending the data to the server by axios        
        // axios.post("/user",{
        //     user_name: this.state.inputValue
        // }).then(function(res){
        //     console.log(res);
        // }, function(err){
        //     console.log(err);
        // });

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Switch>
                        <Route path="/add_student" component={AddStudent}/>
                        <Route path="/add_teacher" component={AddTeacher}/>
                        <Route path="/search_student" component={SearchStudent} />
                        <Route path="/search_teacher" component={SearchTeacher} />
                        <Route path="/add_more_student" component={AddMoreStudent} />
                    </Switch>
                        {/*<MainMenu />*/}
                </div> 
            </div>
        );
    }
}


module.exports.Content = Content;