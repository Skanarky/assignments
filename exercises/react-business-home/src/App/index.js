import React from "react";

import Video from "./Video/";

import Header from "./Header/";

import Main from "./Main/";

import Footer from "./Footer/";



function App() {
    const title = {
        text: "we create artists",
        textClass: "home",
        textLiOne: "Teaching",
        textLiTwo: "Creating",
        textLiThree: "Producing... Artists!",
        textLiClass: "list"
    };

    return (
        <div className="wrapper">
            {/* video */}
            <Video></Video>
            {/* header = nav */}
            <Header></Header>
            {/* main = h1 +  */}
            <Main {...title}></Main>
            {/* footer */}
            <Footer></Footer>
        </div>
    )
}

export default App;