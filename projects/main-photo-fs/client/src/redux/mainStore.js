import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import youtubeReducer from "./youtube.js";
import udemyReducer from "./udemy.js";
import lessonReducer from "./lessons.js";

const store = createStore(combineReducers({videos: youtubeReducer
    , courses: udemyReducer
    , lessons: lessonReducer }), applyMiddleware(thunk));

export default store;