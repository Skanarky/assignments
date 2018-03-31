import React from "react";

import Header from "./Header/";

import Content from "./Content/";

import Footer from "./Footer/";

function App() {
    return (
        <div className="wrap">
            {/* header */}
            <Header></Header>
            {/* content */}
            <Content></Content>
            {/* footer */}
            <Footer></Footer>
        </div>
    )
}

export default App;