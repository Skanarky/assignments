import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Assignment from "./Assignment/Assignment.js";

class Composition extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            isViewingLesson: false,
            isViewingExamples: false
        }
        this.state = this.initialState;
    };

    componentDidMount = () => {
        const { getAssignment, idLessonComposition/*, userId*/ } = this.props;
        getAssignment();
    }

    toggleViewLesson = (event) => {
        const { toggleViewBelow } = this.props;
        this.setState({ ...this.state, isViewingLesson: !this.state.isViewingLesson });
        toggleViewBelow();
    }
    toggleViewingExamples = (event) => {
        this.setState({ ...this.state, isViewingExamples: !this.state.isViewingExamples });
    }

    render = () => {
        // console.log(this.props);
        const { title, shortDescription, exampleImgOneUrl
            , exampleImgTwoUrl, exampleImgThreeUrl, instructions
            , googleLink } = this.props;
        const { isViewingLesson, isViewingExamples } = this.state;
        const styleP = {
            textAlign: "center",
            height: "auto",
            width: "auto",
            padding: "0",
            paddingBottom: "20px"
        };
        return (
            <div className="singleItemOthers">
                <div onClick={this.toggleViewLesson} className="noLineThree"><p style={styleP}>{title}: <span>{shortDescription}</span></p></div>
                <div onClick={this.toggleViewLesson} className="noLineThree"><img src={exampleImgOneUrl} alt="Lesson for Composition" /></div>

                {isViewingLesson ?
                    <div className="viewOneLesson">
                        <h2>{title}</h2>
                        <span>{instructions}</span>
                        <div className="imgLessonWrap">
                            <img className="imgLesson" src={exampleImgOneUrl} alt="Lesson for Composition" />
                            <img className="imgLesson" src={exampleImgTwoUrl} alt="Lesson for Composition" />
                            <img className="imgLesson" src={exampleImgThreeUrl} alt="Lesson for Composition" />
                        </div>
                        <div  className="exampleStudents" to="#">Examples from Other Students</div>
                        {/* {isViewingExamples ? <Examples /> : ""} */}
                        <Link to={googleLink} target="_blank">Examples from the Web</Link>
                        <div>
                            <button onClick={this.toggleViewLesson}>back</button>
                            <button onClick={this.toggleViewLesson}><Link to="/lessons/composition/assignment" className="noLineThree" style={{color: "black"}}>enroll</Link></button>
                        </div>

                    </div>
                    : ""}




                {/* <Link to=path="/lessons/composition/assignment" className="noLineThree"><p style={styleP}>{title}: <span>{shortDescription}</span></p></Link>
                <Link to={`/lessons/composition/${idComposition}`} className="noLineThree"><img src={exampleImgOneUrl} alt="Lesson for Composition" /></Link> */}
                <Switch>
                    <Route path="/lessons/composition/assignment" component={Assignment}></Route>
                </Switch>
            </div>
        )
    }
}

export default Composition;