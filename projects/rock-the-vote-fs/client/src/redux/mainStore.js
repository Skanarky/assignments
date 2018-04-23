import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import issueReducer from "./issues.js";

const store = createStore(combineReducers({ issues: issueReducer }), applyMiddleware(thunk));

export default store;