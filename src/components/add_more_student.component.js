import React from "react";

class AddMoreStudent extends React.Component {
    constructor(props){
        super(props);
        console.dir(this.props.newObj);
    }

    render() {
        return(
            <div>
                <p> Inside the Add More Student </p>
            </div>
        );
    }
}

module.exports.AddMoreStudent = AddMoreStudent;