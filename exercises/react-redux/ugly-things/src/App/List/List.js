import React from "react";
import { connect } from "react-redux";

import { removeCar } from "./../../redux/cars";
import Car from "./Car/Car";

// import ComponChild from "./ComponChild/ComponChild";

const List = (props) => {
    // console.log(props);
    const carComponent = props.data.map((car, i) => <Car removeCar={props.removeCar} index={i} key={car.imgUrl + i} {...car}></Car>)
    return (
        <div className="order">
            {carComponent}
        </div>
    )
}

function mapStateToProps(entireStateInstanceInput) {
    return entireStateInstanceInput.cars;
}

export default connect(mapStateToProps, { removeCar })(List);