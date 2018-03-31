import React from "react";

import superHeroes from "./data.json";

import Cards from "./Cards";

const App = () => {
    function grrrVoice(inpVoice) {
        alert(inpVoice);
    };
    return (
        <div className="wrap">
            {superHeroes.map((objSpot, i) => <Cards key={objSpot.name + i} superHero={objSpot} speak={grrrVoice} index={i}></Cards>)}
        </div>
    )
}
export default App;