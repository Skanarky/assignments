import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link className="noline" to="/"><span>Home</span></Link>
                <Link className="noline" to="/learn"><span>Let's Learn</span></Link>
                <Link className="noline" to="/about"><span>About</span></Link>
            </nav>
        </header>
    )
}

export default Header;