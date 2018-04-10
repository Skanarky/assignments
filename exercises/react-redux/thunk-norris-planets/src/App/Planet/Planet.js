
import React from "react";

const Planet = (props) => {
    // console.log(props);
    // const { name, diameter, climate } = props;
    const { joke, index } = props;

    if (index % 2) {
        return (
            <p>
                <li style={{ color: "red" }}> <p> {joke}</p>
                    {/* <p style={{ color: "red" }}>{joke}</p> */}
                </li>
            </p>
        )
    } else {
        return (
            <p>
                <li style={{ color: "blue" }}>{joke}
                    {/* <p style={{ color: "blue" }}>{joke}</p> */}
                </li>
            </p>
        )
    }

    // return (

    //     <div>
    //         {/* test */}
    //         {/* <h2>{name}</h2>
    //         <p>Diameter: {diameter}</p>
    //         <p>Climate: {climate}</p> */}
    //         <p>{joke}</p>
    //         {/* tags and/or comp and/or destructing data + comp HERE */}
    //     </div>
    // )
}

export default Planet;