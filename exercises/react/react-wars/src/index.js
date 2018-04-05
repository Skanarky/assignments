import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


import "./style.css";

import App from "./App/App";

ReactDOM.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
    , document.getElementById("root"));