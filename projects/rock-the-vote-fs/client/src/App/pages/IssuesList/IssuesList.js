
import React from "react";
import { connect } from "react-redux";

import { getIssues } from "./../../../redux/issues.js";
import { addIssue } from "./../../../redux/issues.js";

import Issue from "./Issue/Issue.js";

class IssuesList extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                title: "",
                description: "",
                imgUrl: ""
            }
        }
        this.state = this.initialState;
    };

    componentDidMount = () => {
        const { getIssues } = this.props;
        getIssues();
    }

    handleChange = (event) => {
        // console.log(event);
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { inputs } = this.state;
        const { addIssue } = this.props;
        addIssue(inputs);
        this.setState({ ...this.initialState });
    }

    render = () => {
        const { title, description, imgUrl } = this.state.inputs;

        return (
            <section className="learn-wrap">
                <div className="buttons">
                    <form className="searches">
                        <div>
                            <input onChange={this.handleChange} name="title" value={title} type="text" placeholder="Title (min 3 char.)" />
                            <input onChange={this.handleChange} name="description" value={description} type="text" placeholder="Description (min 10 char.)" />
                            <input onChange={this.handleChange} name="imgUrl" value={imgUrl} type="url" placeholder="Image URL" />
                        </div>
                        {title.length < 3 || description.length < 10 || imgUrl.length < 10
                            ? <button disabled>Post Issue</button>
                            : <button onClick={this.handleSubmit}>Post Issue</button>
                        }
                    </form>
                </div>
                <Issue></Issue>
            </section>
        )
    }
}

export default connect(null, { getIssues, addIssue })(IssuesList);