import React from "react";

import { editCar } from "./../../../redux/cars";
import { connect } from "react-redux";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            isEditing: false,
            inputs: {
                imgUrl: props.imgUrl,
                caption: props.caption,
                description: props.description
            }
        }
        this.state = this.initialState;
    };
    //1
    toggleEdit = () => this.setState({ inputs: {}, isEditing: !this.state.isEditing});

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

    // componentWillReceiveProps(nextProps) {
    //     const { imgUrl, caption, description, index } = this.props;
    //     if (index !== nextProps.index) {
    //         this.setState({ inputs: nextProps.inputs });
    //     }
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const { editCar, index } = this.props;
        // console.log(event);

        // dispatch an action, that contains a type ADD_CAR + input data
        editCar(index, this.state.inputs);
        this.setState({ ...this.initialState, isEditing: !this.state.isEditing });
    }

    render() {
        const { imgUrl, caption, description, removeCar, index } = this.props;
        const { isEditing } = this.state;
        // const { editedUrl, editedCaption, editedDescription } = this.state.inputs;
        if (isEditing) {
            return (
                <div className="boxTwo">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input onChange={this.handleChange} name="imgUrl" type="url" placeholder="EDIT Ugly Image URL" value={this.state.inputs.imgUrl} />
                            <input onChange={this.handleChange} name="caption" type="text" placeholder="EDIT caption for Ugly Thing" value={this.state.inputs.caption} />
                            <input onChange={this.handleChange} name="description" type="text" placeholder="EDIT Description" value={this.state.inputs.description} />
                        </div>
                        <div>
                            <button>SAVE</button>
                        </div>
                    </form>
                    <p><button onClick={this.toggleEdit}>BACK</button></p>
                </div>
            )
        }
        return (
            <div className="box">
                <div>
                    <h4>{caption.toUpperCase()}</h4>
                    <h6>{description}</h6>
                    <div>
                        <p><button onClick={() => removeCar(index)}>DEL</button></p>
                        <p><button onClick={this.toggleEdit}>EDIT</button></p>
                    </div>
                    <img src={imgUrl} style={{ width: "360px", height: "240px" }} alt="" />
                </div>
            </div>
        )
    }
}

export default connect(null, { editCar })(Car);

// export default Car;

// const Car = (props) => {
//     console.log(props);
//     const { imgUrl, caption, description, removeCar, index } = props;
//     return (
//         <div className="box">
//             <div>
//                 <h4>{caption.toUpperCase()}</h4>
//                 <h6>{description}</h6>
//                 <div>
//                     <p><button onClick={() => removeCar(index)}>DEL</button></p>
//                     <p><button onClick={() => removeCar(index)}>EDIT</button></p>
//                 </div>
//                 <img src={imgUrl} style={{ width: "360px", height: "240px" }} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Car;