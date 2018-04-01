
import React from "react";
import Navbar from "./Navbar/Navbar";

const Header = (props) => {
    return (
        <header>
            <Navbar />
            <div>
                <h1>Clean Blog</h1>
                <h3>A Blog Theme by Start Bootstrap</h3>
            </div>
            <h4>Start Bootstrap</h4>
        </header>
    )
}

export default Header;