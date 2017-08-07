import React from "react";
var Content = require("./content.component").Content;
var Header = require("./header.component").Header;
var axios = require("axios");

class App extends React.Component{
    
    constructor(){
        super();
        this.state = {
            contests:[]
        }   
        console.log("The constructor has started");
    }

    onClickHandler(){
        console.log("click event has triggered");
    }

    componentDidMount() {
         console.log("The component will get unmounted");
    }

    componentWillUnmount(){
        console.log("The component will get unmounted");
    }  

    render(){
        return (
            <div className="container">
                <div className="row">
                    <Header />
                    <Content />
                </div> 
            </div>
        );
    }
}

module.exports.App = App;