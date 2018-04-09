import React from "react";

import EditForm from "./EditForm/EditForm";

// from CLASS

class CarTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    toggleEdit = () => this.setState({ isEditing: !this.state.isEditing });

    render() {
        // console.log(props);
        const { imgUrl, caption, description, removeCar, index } = props;
        if (isEditing) {
            return <Form toggleEdit={toggleEdit} index={index} imgUrl={imgUrl} caption={caption} description={description} ></Form>;
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
                {/* <Form index={index} imgUrl={imgUrl} caption={caption} description={description} ></Form> */}
            </div>
        )
    }
}

export default CarTwo;