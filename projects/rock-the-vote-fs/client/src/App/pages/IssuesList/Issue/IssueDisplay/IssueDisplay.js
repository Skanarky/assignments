
import React from "react";

class IssueDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                upVotes: 0,
                downVotes: 0,
                totalVotes: 0
            }
        }
        this.state = this.initialState;
    };
    
    render = () => {
        // console.log(this.props);
        const { _id, title, description, imgUrl, totalVotes } = this.props;
        return (
            <div className="singleItem">
                {/* <Link to={urlCourse} target="_blank" className="nolineThree"> */}
                <div  className="small">
                    <p>{title}</p>
                    <button>X</button>
                </div>
                <p className="description">{description}</p>

                {/* </Link> */}
                {/* <Link to={urlCourse} target="_blank" className="nolineThree"> */}
                <img src={imgUrl} alt={title} />
                {/* </Link> */}
                <div className="votes">
                    <div>
                        Votes: {totalVotes > 0 ? totalVotes : 0}
                    </div>
                    <div>
                        <i className="fa fa-thumbs-up"></i>
                        <i className="fa fa-thumbs-down"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default IssueDisplay;