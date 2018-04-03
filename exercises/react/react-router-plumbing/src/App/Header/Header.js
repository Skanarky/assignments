
import React from "react";
import { Link } from "react-router-dom";

// import ComponChild from "./ComponChild/ComponChild";

const Header = (props) => {
    return (
        <header>
        <nav>
                <Link className="noline" to ="/"><span>Home</span></Link>
                <Link className="noline" to ="/about"><span>About</span></Link>
                <Link className="noline" to="/contact"><span>Contact</span></Link>
            </nav>
            <h1>Best Plumbing Corp.</h1>
            
            {/* tags and/or comp and/or destructing data + comp HERE */}
        </header>
    )
}

export default Header;