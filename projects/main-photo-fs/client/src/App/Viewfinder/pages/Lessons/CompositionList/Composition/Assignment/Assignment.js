
import React from "react";
import { Link } from "react-router-dom";

// import { connect } from "react-redux";

// import { deleteIssue, editIssue } from "./../../../../../redux/issues.js";
// import { addComment, getComments, deleteComment } from "./../../../../../redux/comments.js";

import Examples from "../Examples/Examples.js";
import CommentDisplay from "./CommentDisplay/CommentDisplay.js";

class Assignment extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            isViewingExamples: false
        }
        this.state = this.initialState;
    };

    // componentDidMount() {
    //     const { getComments, id } = this.props;
    //     getComments(id);
    // }

    // handleChange = (event) => {
    //     // console.log(event);
    //     const { value, name } = event.target;
    //     this.setState(prevState => {
    //         return {
    //             comment: {
    //                 ...prevState.comment,
    //                 [name]: value
    //             }
    //         }
    //     });
    // }

    // handleClick = (event) => {
    //     const { deleteIssue, deleteComment, id } = this.props;
    //     const { data } = this.props;
    //     deleteIssue(id);
    //     data.filter(comment => comment.issueId === id).map((comment, i) => deleteComment(comment._id));
    // }

    // toggleComment = (event) => {
    //     this.setState({ ...this.state, isCommenting: !this.state.isCommenting });
    // }

    // toggleCommentBack = (event) => {
    //     this.setState({ ...this.state, isCommenting: false });
    // }

    // handleClickUpVote = (event) => {
    //     const { editIssue, id, upVotes } = this.props;
    //     editIssue(id, { upVotes: upVotes + 1 });
    // }
    // handleClickDownVote = (event) => {
    //     const { editIssue, id, downVotes } = this.props;
    //     editIssue(id, { downVotes: downVotes + 1 });
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { container } = this.state.comment;
    //     const { addComment, id } = this.props;
    //     addComment({
    //         container,
    //         issueId: id
    //     });
    //     this.setState({ ...this.state, comment: this.initialState.comment });
    // }

    toggleViewingExamples = (event) => {
        this.setState({ ...this.state, isViewingExamples: !this.state.isViewingExamples });
    }

    render = () => {
        // console.log(this.props);
        // const { isCommenting } = this.state;
        // const { container } = this.state.comment;
        const { isViewingExamples } = this.state;

        // loading, err, id
        const { loadingAssignment, errMsgAssignment, idAssignment, idLessonComposition } = this.props;

        const styleEx = {
            backgroundColor: "rgba(245, 245, 245)",
            maxWidth: "608px",
            border: "3px solid black"
        }

        // assignments
        const { title, shortDescription, exampleImgOneUrl
            , exampleImgTwoUrl, exampleImgThreeUrl, instructions
            , googleLink } = this.props.lessonId;
        //comments?!    
        // const presentComments = data.filter(comment => comment.issueId === id).map((comment, i) =>
        //     <CommentDisplay key={comment._id + i}
        //         idComment={comment._id} index={i} loadingComment={loading} errMsgComment={errMsg}
        //         {...comment}></CommentDisplay>);

        const styleAssignment = {
            backgroundColor: "rgb(245, 245, 245, .01)",
            display: "flex",
            flexDirection: "column",
            position: "fixed"
        }

        const styleContain = {
            backgroundColor: "rgb(245, 245, 245)", display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: ".1fr .5fr",
        }
        if (loadingAssignment) {
            return (
                <div style={{ color: "rgba(199, 2, 2, 0.63)", paddingLeft: "15px", fontSize: ".9em" }}>... loading Assignment</div>
            )
        } else if (errMsgAssignment) {
            return (
                <div style={{ color: "rgba(199, 2, 2, 0.63)", paddingLeft: "15px", fontSize: ".9em" }}>{errMsgAssignment}</div>
            )
        } else {
            return (
                <div style={styleAssignment} className="lessonsView">
                    <div className="singleItemOthers">
                        <div className="viewOneLesson">
                            <div>
                                <div className="viewOneLesson" style={styleContain}>
                                    <div style={{ paddingBottom: "15px" }} className="navRoom">
                                        <Link className="viewfinder" to="/"><span>Viewfinder</span></Link>
                                        <Link className="viewfinder" to="/lessons"><span>Lessons</span></Link>
                                    </div>
                                    <h2>Assignment {title}</h2>
                                    <span>{instructions}</span>
                                    <div className="imgLessonWrap">
                                        <img className="imgLesson" src={exampleImgOneUrl} alt="Lesson for Composition" />
                                        <img className="imgLesson" src={exampleImgTwoUrl} alt="Lesson for Composition" />
                                        <img className="imgLesson" src={exampleImgThreeUrl} alt="Lesson for Composition" />
                                    </div>
                                    <div style={{width:"210px", margin: "0 auto", fontSize: "1.2em"}} onClick={this.toggleViewingExamples} className="exampleStudents" to="#">Check Examples from Actual Students</div>
                                    {isViewingExamples ?
                                        <div className="bigViewExample" style={styleEx} >
                                            <button onClick={this.toggleViewingExamples}>Close Examples</button>
                                            <div>
                                                <Examples key={idLessonComposition} idLessonComposition={idLessonComposition}></Examples>
                                            </div>
                                        </div> : ""}
                                    <Link style={{width:"190px", margin: "0 auto"}} to={googleLink} target="_blank">Examples from the Web</Link>
                                </div>
                            </div>
                            {/* <h2>{title}</h2>
                    <span>{instructions}</span>
                    <div>
                        <img className="imgLesson" src={exampleImgOneUrl} alt="Lesson for Composition" />
                        <img className="imgLesson" src={exampleImgTwoUrl} alt="Lesson for Composition" />
                        <img className="imgLesson" src={exampleImgThreeUrl} alt="Lesson for Composition" />
                    </div>
                    <Link to={googleLink} target="_blank">Examples from Other Students</Link>
                    <Link to={googleLink} target="_blank">Examples from the Web</Link> */}

                            {/* <div className="small">
                        <p>{title.charAt(0).toUpperCase().concat(title.substr(1))}</p>
                        <button onClick={this.handleClick}>Delete</button>
                    </div>
                    <p className="description">{description.charAt(0).toUpperCase().concat(description.substr(1))}</p>
    
                    <img src={imgUrl} alt={title} />
    
                    <div className="votes">
                        <div>
                            Votes: {(upVotes + downVotes) > 0 ? (upVotes + downVotes) : 0}
                        </div>
                        <div>
                            <i onClick={this.handleClickUpVote} className="fa fa-thumbs-up"></i>
                            <i onClick={this.handleClickDownVote} className="fa fa-thumbs-down"></i>
                            <i onClick={this.toggleComment} className="fa fa-comment"></i>
                        </div>
                    </div>
                    {isCommenting ?
                        <div className="view-comments">
                            <button onClick={this.toggleCommentBack}>Go Back</button>
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange} name="container"
                                    value={container} type="text" placeholder="Add a Comment" />
                                <button disabled={container.length < 3}>Post</button>
                            </form>
                            <ol>Comments:
                            {presentComments}
                            </ol>
                        </div>
                        : ""} */}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

// export default connect(stateToProps, { deleteIssue, editIssue, addComment, getComments, deleteComment })(Assignment);
export default Assignment;