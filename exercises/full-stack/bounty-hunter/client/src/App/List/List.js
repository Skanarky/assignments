import React from "react";
import { connect } from "react-redux";

import { removeCar } from "./../../redux/cars";
import Car from "./Car/Car";

const List = (props) => {
    // console.log(props);
    const carComponent = props.data.map((car, i) => <Car removeCar={props.removeCar} index={i} key={car.imgUrl + i} {...car}></Car>)
    return (
        <div className="order">
            {carComponent}
        </div>
    )
}

function stateToProps(entireStateInstanceInput) {
    return entireStateInstanceInput.cars;
}

export default connect(stateToProps, { removeCar })(List);