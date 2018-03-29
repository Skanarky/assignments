import React from "react";

const Cards = (props) => {
    const pickDollarSign = () => {
        if (props.vacSpot.price < 500) {
            return "$";
        } else if (props.vacSpot.price < 1000) {
            return "$$";
        } else if (props.vacSpot.price > 1000) {
            return "$$$";
        }
    };

    const pickCollor = () => {
        if (props.vacSpot.timeToGo === "Spring") {
            return { backgroundColor: "green", border: "5px solid orange", color: "orange" };
        } else if (props.vacSpot.timeToGo === "Winter") {
            return { backgroundColor: "whitesmoke", border: "5px solid brown", color: "brown" };
        } else if (props.vacSpot.timeToGo === "Fall") {
            return { backgroundColor: "orange", border: "5px solid red", color: "red" };
        } else if (props.vacSpot.timeToGo === "Summer") {
            return { backgroundColor: "yellow", border: "5px solid green", color: "green" };
        }
    };

    return (
        <div style={pickCollor()}>
            <h2>{props.vacSpot.place}</h2>
            <h3>{pickDollarSign()}</h3>
        </div >
    )
}

export default Cards;


{/* if (props.vacSpot.price < 500) {
    return "$";
} else if (props.vacSpot.price < 1000) {
    return "$$";
} else if (props.vacSpot.price > 1000) {
    return "$$$";
} */}