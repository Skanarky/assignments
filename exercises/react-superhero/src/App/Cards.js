import React from "react";

const Cards = (props) => {
    return (
        <div className="man">
            <h2 style={{maxWidth: "200px"}} onClick={() => props.speak(props.superHero.voice)}>{props.superHero.name}</h2>
            <img style={{maxWidth: "180px", maxHeight: "270px", boxShadow: "7px 12px rgba(136, 136, 136, 0.6)", borderRadius: "25%"}} src={props.superHero.img} />
        </div >
    )
}

export default Cards;