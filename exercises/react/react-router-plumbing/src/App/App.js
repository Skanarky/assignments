import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";


// import Cstate from "./Cstate/Cstate";

const App = (props) => {
    return (
        <div className="wrapper">
            <Header></Header>
            <div className="cont-wrap">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contacts}></Route>
                </Switch>
            </div>
            <Footer></Footer>
            {/* tags and/or comp and/or destructing data + comp HERE */}
        </div>
    )
}

export default App;