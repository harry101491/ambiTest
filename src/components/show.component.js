import React from "react";

class ShowData extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div className="col-md-offset-4 col-md-4">
                <div id="name">
                    Name: {this.props.name}
                </div>
                <div id="age">
                    Age: {this.props.age}
                </div>
                <div id="city">
                    City: {this.props.city}
                </div>
                <div id="gender">
                    Gender: {this.props.gender}
                </div>
            </div>
        );
    }
}

module.exports.ShowData = ShowData;