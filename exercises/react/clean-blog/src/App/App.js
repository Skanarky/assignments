import React from "react";

import Header from "./Header/Header";
import BlogList from "./BlogList/BlogList";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
                {/* <Navbar /> */}
            <BlogList />
                {/* <BlogPost /> */}
            <Footer />
        </div>
    )
}

export default App;