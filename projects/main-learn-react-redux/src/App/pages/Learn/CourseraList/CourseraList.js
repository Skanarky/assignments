
import React from "react";
import { connect } from "react-redux";
import CourseraCourse from "./CourseraCourse/CourseraCourse";

class CourseraList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            intervalId: 0
        };
    };

    componentDidMount = () => {
        let intervalId = setInterval(this.timer, 400);
        // store intervalId in the state so it can be accessed later:
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount = () => {
        clearInterval(this.state.intervalId);
    }

    timer = () => {
        // setState method is used to update the state
        this.setState({ currentCount: this.state.currentCount + 1 });
    }

    render = () => {
        // console.log(this.props);
        const { data, loading, errMsg } = this.props;
        let { currentCount } = this.state;
        const presentCoCourses = data.map((course, i) => <CourseraCourse key={course.id} id={course.id} index={i} {...course}></CourseraCourse>);
        
        if (loading && currentCount % 3 === 0) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: "1.1em" }}>. . . loading</div>
            )
        } else if (loading && currentCount % 2 === 0) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: "1.1em" }}>. .   load</div>
            )
        } else if (loading && loading && currentCount % 1 === 0) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: "1.1em" }}>.     lo</div>
            )
        } else if (errMsg) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)", paddingLeft: "15px", fontSize: "1.1em" }}>{errMsg}</div>
            )
        } else {
            return (
                <div className="contain">
                    {presentCoCourses}
                </div>
            )
        }
    }
}

function stateToProps(globalState) {
    return globalState.coCourses;
}

export default connect(stateToProps, {})(CourseraList);