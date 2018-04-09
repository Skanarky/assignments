import React from "react";

import { addCar, reset } from "./../../redux/cars";

import { connect } from "react-redux";

// import List from "./../List/List";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                imgUrl: "",
                caption: "",
                description: ""
            }
        }

        this.state = this.initialState;
    }

    handleChange = (event) => {
        //take the value from the input, and set state accordingly
        // console.log(event);
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    // we need prev state so that we can include all the values that we HAVENT changed:
                    ...prevState.inputs,

                    // change the ONE value we do want to change:
                    [name]: value
                }
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);

        // dispatch an action, that contains a type ADD_CAR + input data
        this.props.addCar(this.state.inputs);
        this.setState(this.initialState);
    }

    render() {
        const { imgUrl, caption, description } = this.state.inputs;
        // console.log(this.props);
        // console.log(this.state);
        return (
            <div className="smallWrap">
                <form onSubmit={this.handleSubmit}>
                    <h2>Ugly Things</h2>
                    <div>
                        <input onChange={this.handleChange} name="imgUrl" type="url" placeholder="Ugly Thing Image URL" value={imgUrl} />
                        <input onChange={this.handleChange} name="caption" type="text" placeholder="Caption for This Ugly Thing" value={caption} />
                        <input onChange={this.handleChange} name="description" type="text" placeholder="Why The 'Thing' Is A Waste of Resources" value={description} />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <button className="resButton" onClick={this.props.reset}>Reset Form</button>
            </div>
        )
    }
}

export default connect(null, { addCar, reset })(Form);