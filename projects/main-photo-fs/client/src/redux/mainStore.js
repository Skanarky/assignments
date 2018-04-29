import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import youtubeReducer from "./youtube.js";
import udemyReducer from "./udemy.js";

const store = createStore(combineReducers({videos: youtubeReducer, courses: udemyReducer }), applyMiddleware(thunk));

export default store;