import React from "react";

import { editCar } from "./../../../../redux/cars";
import { connect } from "react-redux";

// from CLASS

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isEditing: false,
            inputs: {
                imgUrl: props.imgUrl,
                caption: props.caption,
                description: props.description
            }
        }
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
        const { editCar, index, toggleEdit } = this.props;
        // console.log(event);
        // console.log(this.props);

        // dispatch an action, that contains a type ADD_CAR + input data
        editCar(index, this.state.inputs);
        // ?? NOT SURE for the below
        toggleEdit();
    }

    render() {
        const { imgUrl, caption, description } = this.props;

        return (
            <div className="box">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input onChange={this.handleChange} name="imgUrl" type="url" placeholder="Edit Image URL" value={imgUrl} />
                            <input onChange={this.handleChange} name="caption" type="text" placeholder="Edit Caption" value={caption} />
                            <input onChange={this.handleChange} name="description" type="text" placeholder="Edit Description" value={description} />
                        </div>
                        <div>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { editCar })(EditForm);


//     this.state = this.initialState;
// };
// //1
// toggleEdit = () => this.setState({ isEditing: !this.state.isEditing});

// // componentWillReceiveProps(nextProps) {
// //     const { imgUrl, caption, description, index } = this.props;
// //     if (index !== nextProps.index) {
// //         this.setState({ inputs: nextProps.inputs });
// //     }
// // }