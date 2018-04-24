
import React from "react";

import { connect } from "react-redux";
import { deleteIssue, editIssue } from "./../../../../../redux/issues.js";
import { addComment, getComments } from "./../../../../../redux/comments.js";

import CommentDisplay from "./CommentDisplay/CommentDisplay.js";

class IssueDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            upVotes: props.upVotes,
            downVotes: props.downVotes,
            isCommenting: false,
            comment: {
                container: "",
                issueId: props.id
            }
        }
        this.state = this.initialState;
    };

    handleChange = (event) => {
        // console.log(event);
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                comment: {
                    ...prevState.comment,
                    [name]: value
                }
            }
        });
    }

    handleClick = (event) => {
        const { deleteIssue, id } = this.props;
        deleteIssue(id);
    }

    toggleComment = (event) => {
        // const { getComments, id } = this.props;
        this.setState({ ...this.state, isCommenting: !this.state.isCommenting });
        // getComments(id);
    }
    // toggleCommentBack = (event) => {
    //     this.setState({ ...this.state, isCommenting: false });
    // }

    handleClickUpVote = (event) => {
        const { editIssue, id } = this.props;
        let { upVotes } = this.state;
        upVotes++;
        editIssue(id, {upVotes});
    }
    handleClickDownVote = (event) => {
        const { editIssue, id } = this.props;
        let { downVotes } = this.state;
        downVotes++;
        editIssue(id, {downVotes});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { comment } = this.state;
        const { addComment } = this.props;
        addComment(comment);
        this.setState({ ...this.state, comment: this.initialState.comment });
    }

    render = () => {
        // console.log(this.props);
        const { isCommenting } = this.state;
        const { container } = this.state.comment;
        // comments
        const { data, loading, errMsg, getComments, id } = this.props;
        const presentComments = data.map((comment, i) => <CommentDisplay key={comment._id}
            idComment={comment._id} index={i} loadingComment={loading} errMsgComment={errMsg}
            {...comment}></CommentDisplay>);
        // issues
        const { title, description, imgUrl, upVotes, downVotes } = this.props;
        return (
            <div className="singleItem">
                {/* <Link to={urlCourse} target="_blank" className="nolineThree"> */}
                <div className="small">
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
                    <div onLoad={getComments(id)} className="view-comments">
                        {/* <button onClick={this.toggleCommentBack}>Go Back</button> */}
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChange} name="container"
                                value={container} type="text" placeholder="Add a Comment" />
                            {container.length < 3 ?
                                <button disabled>Post</button>
                                : <button>Post</button>
                            }
                        </form>
                        <ol>Comments:
                        {presentComments}
                        </ol>
                    </div>
                    : ""}
            </div>
        )
    }
}

function stateToProps(globalState) {
    return globalState.comments;
}

export default connect(stateToProps, { deleteIssue, editIssue, addComment, getComments })(IssueDisplay);