import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Person from "./Person/Person";

const Routing = () => {
    return (
        <div className="cont-wrap">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/:num" component={Person}></Route>
                </Switch>
        </div>
    )
}

export default Routing;