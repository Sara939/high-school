import { Component } from "react";

class Student extends Component {
    constructor(props) {
        super();
    };
    render() {
        return (
            <div>
                <h5>{this.props.fname}</h5>
                <h5>{this.props.lname}</h5>
                <h5>{this.props.date}</h5>
                <img src={this.props.pic} alt=""/>

            </div>
        )

    }
}
export default Student;

