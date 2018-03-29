import React from "react";

const Pet = props =>
    <li>
        <h2>{props.pet.name}</h2>
        <p>{props.pet.breed}</p>
    </li>

export default Pet;