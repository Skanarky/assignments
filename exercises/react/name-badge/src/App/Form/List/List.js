
import React from "react";

const List = (props) => {
    console.log(props);
    const { nameF, nameL, email, placeOfBirth, phone, favouriteFood, extra, index } = props;
    let setColor = "";
    if (index % 19 === 0) {
        setColor = "orange";
    } else if (index % 17 === 0) {
        setColor = "green";
    } else if (index % 13 === 0) {
        setColor = "blue";
    } else if (index % 11 === 0) {
        setColor = "gray";
    } else if (index % 9 === 0) {
        setColor = "bisque";
    } else if (index % 8 === 0) {
        setColor = "magenta";
    } else if (index % 7 === 0) {
        setColor = "pink";
    } else if (index % 6 === 0) {
        setColor = "brown"; 
    } else if (index % 5 === 0) {
        setColor = "yellow"; 
    } else if (index % 4 === 0) {
        setColor = "white"; 
    } else if (index % 3 === 0) {
        setColor = "lightgreen"; 
    } else if (index % 2 === 0) {
        setColor = "red"; 
    } else {
        setColor = "purple";
    }
    return (
        <div className="box">
            {/* { index % 2 ? 
            <h3 style={{ backgroundColor: "red" }}>Badge:</h3> :
            <h3 style={{ backgroundColor: "blue" }}>Badge:</h3>} */}
            <h3 style={{ backgroundColor: `${setColor}` }}>Badge:</h3>
            <div>
                <h4><span>Name</span>: {nameF.charAt(0).toUpperCase().concat(nameF.substr(1))} {nameL.charAt(0).toUpperCase().concat(nameL.substr(1))}</h4>
                <h4><span>Phone No.</span>: {phone.substr(0, 3)}-{phone.substr(3, 3)}-{phone.substr(6, 4)}</h4>
                <h4><span>Place of Birth</span>: {placeOfBirth.charAt(0).toUpperCase().concat(placeOfBirth.substr(1))}</h4>
                <h4><span>Email</span>: {email}</h4>
                <h4><span>Favourite Food</span>: {favouriteFood}</h4>
            </div>
            <h4 style={{ border: `2px solid ${setColor}` }} className="bigTwo">{extra}</h4>
        </div>
    )
}

export default List;
