import React from 'react';
import Content from "./content.component";
import Header from "./header.component";
var axios = require("axios");
// var data = require("../testData.json");

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
        // ajax request
        var self = this;
        
        axios.get("/contest").then(function(res){
            // console.dir(res.data);
            self.setState({
                contests: res.data
            });
        },function(err){
            console.log(err);
        });

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

export default App;