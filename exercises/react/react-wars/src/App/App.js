import React from "react";

import NavbarContainer from "./NavbarContainer/NavbarContainer";
import Routing from "./Routing/Routing";

const App = () => {
    return (
        <div className="wrapper">
            <NavbarContainer></NavbarContainer>
            <Routing></Routing>
            {/* tags and/or comp and/or destructing data + comp HERE */}
        </div>
    )
}

export default App;