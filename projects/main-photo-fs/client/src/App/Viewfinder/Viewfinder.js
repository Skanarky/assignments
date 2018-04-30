import React from "react";
import { Link, Route } from "react-router-dom";

// import { connect } from "react-redux";

import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Masters from "./pages/Masters.js";

// import { getIssues } from "./../../../redux/issues.js";
// import { addIssue } from "./../../../redux/issues.js";

// import Issue from "./Issue/Issue.js";

class Viewfinder extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.initialState = {
    //         inputs: {
    //             title: "",
    //             description: "",
    //             imgUrl: "",
    //             upVotes: 0,
    //             downVotes: 0
    //         }
    //     }
    //     this.state = this.initialState;
    // };

    // componentDidMount = () => {
    //     const { getIssues } = this.props;
    //     getIssues();
    // }

    // handleChange = (event) => {
    //     // console.log(event);
    //     const { value, name } = event.target;
    //     this.setState(prevState => {
    //         return {
    //             inputs: {
    //                 ...prevState.inputs,
    //                 [name]: value
    //             }
    //         }
    //     });
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { inputs } = this.state;
    //     const { addIssue } = this.props;
    //     addIssue(inputs);
    //     this.setState({ ...this.initialState });
    // }

    render = () => {
        // const { title, description, imgUrl } = this.state.inputs;

        return (
            <div className="wrapper">
                <div className="topLeft"></div>
                <div className="topRight"></div>
                <div className="bottomLeft"></div>
                <div className="bottomRight"></div>
                <Link className="login" to="/login"><span>Login</span></Link>
                <div className="circle">
                    <Link className="lessons" to="/lessons"><span>Lessons</span></Link>
                </div>
                <Link className="noLine others" to="/others"><span>Others</span></Link>
                <Link className="noLine contact" to="/contact"><span>Contact</span></Link>
                <Link className="noLine about" to="/about"><span>About</span></Link>
                <Link className="noLine masters" to="/masters"><span>Masters</span></Link>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/masters" component={Masters}></Route>
            </div>
        )
    }
}

export default Viewfinder;
// export default connect(null, { getIssues, addIssue })(Viewfinder);