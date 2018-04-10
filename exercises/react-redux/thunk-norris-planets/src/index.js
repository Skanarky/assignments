import React from "react";
import ReactDOM from "react-dom";

// in SRC folder START

import { Provider } from "react-redux";

// !!! STORE BELOW !!!
import store from "./redux/mainStore";

import "./style.css";

import App from "./App/App";

// in SRC folder END

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root")
);