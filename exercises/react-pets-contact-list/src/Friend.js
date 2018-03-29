import React from "react";
import Pet from "./Pet.js";

const Friend = props =>
    <li>
        <h1>{props.human.name}</h1>
        <p>{props.human.age}</p>
        <ul>
            {props.human.pets.map((animal, i) => <Pet key={animal.name + i} pet={animal}></Pet>)}
        </ul>
    </li>



export default Friend;