import React from "react";
import axios from "axios";

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
        axios.get(`/images/?lessonId=${idLessonComposition} `)
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

        const presentExamples = images.map((example, i) =>
            <div>
                <div>User Name {example._id.charAt(example._id.length - 1)}</div>
                <img className="imgLesson" src={example.imageUrl} alt={example.lessonId.title} />
            </div>
        );

        if (loading) {
            return <h1 style={{ color: "green" }}>... Loading</h1>
        } else {
            if (errMsg) {
                return <p>Sorry, data is not availble right now!</p>
            } else {
                return (
                    <div className="exampleImgs">
                        {presentExamples}
                    </div>
                )
            }
        }
    }
}


// export default connect(stateToProps, { getImages, editIssue, addComment, getComments, deleteComment })(Assignment);
export default Examples;