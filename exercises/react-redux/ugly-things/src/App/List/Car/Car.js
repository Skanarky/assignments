import React from "react";

import { removeCar } from "./../../../redux/cars";
import { connect } from "react-redux";

const Car = (props) => {
    console.log(props);
    const { imgUrl, caption, description, removeCar, index } = props;
    return (
        <div className="box">
            <div>
                <h4>{caption.toUpperCase()}</h4>
                <h6>{description}</h6>
                <p><button onClick={() => removeCar(index)}>Delete Item</button></p>
                <img src={imgUrl} style={{ width: "380px" }} alt="" />
            </div>
        </div>
    )
}

export default Car;