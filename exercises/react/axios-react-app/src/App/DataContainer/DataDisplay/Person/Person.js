
import React from "react";

// import Person from "./";

const Person = (props) => {
    // console.log(props);
    return (
        <li>
            <h3>Name: {props.name}</h3>
            <h5><span>Height: {props.height}</span><span>Weight: {props.mass}</span><span>Hair: {props.hair_color}</span></h5>
            {/* tags and/or comp and/or destructing data + comp HERE */}
        </li>
    )
}

export default Person;