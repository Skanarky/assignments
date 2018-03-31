import React from "react";

import vacationSpots from "./data";

import Cards from "./Cards";

const App = () =>
    <div className="wrap">
        {vacationSpots.map((objSpot, i) => <Cards key={objSpot.place + i} vacSpot={objSpot} index={i}></Cards> )}
    </div>

export default App;