import React from "react";
import axios from "axios";

import ExamplesDisplay from "./ExamplesDisplay/ExamplesDisplay.js";

class Examples extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            images: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount = () => {
        const { idLessonComposition } = this.props;
        // console.log(this.props.match);
        axios.get(`/images/?lessonId=${idLessonComposition}`)
            .then(response => {
                // console.log(response.data);
                const { data } = response;
                this.setState({
                    images: data,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    errMsg: err.message
                })
            })
    }

    render = () => {
        const { images, errMsg, loading } = this.state;
        const { shortDescription, toggleViewingExamples  } = this.props;

        const presentExamples = images.sort((exampleOne, exampleTwo) =>
        exampleOne.likes < exampleTwo.likes).map((example, i) =>
            <ExamplesDisplay toggleViewingExamples={toggleViewingExamples} 
            key={example._id + i} 
            exampleImageFull={example} {...example} exampleImageId={example._id} index={i} shortDescription={shortDescription}></ExamplesDisplay>
        );

        if (loading) {
            return <h1 style={{ color: "green" }}>... Loading</h1>
        } else if (errMsg) {
            return <p>Sorry, data is not availble right now!</p>
        } else if (images.length === 0) {
            return (
                <div className="exampleImgs">
                    No Images Available
                </div>
            )
        } else {
            return (
                <div className="exampleImgs">
                    {presentExamples}
                </div>
            )
        }
    }
}



// export default connect(stateToProps, { getImages, editIssue, addComment, getComments, deleteComment })(Assignment);
export default Examples;