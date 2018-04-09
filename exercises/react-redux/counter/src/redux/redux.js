import { createStore } from "redux";

export function increment() {
    return {
        type: "INCREMENT"
    }
}
export function decrement() {
    return {
        type: "DECREMENT"
    }
}
export function dev() {
    return {
        type: "DEV"
    }
}
export function multi() {
    return {
        type: "MULTI"
    }
}

//this is the guy (the REDUCER) that waits for the actions and creates a new copy (new version) of the state

// pay attention to what data is going to be the state... if it is a simple 
//exercise we can just make it a primitive data type, etc. BUT usually is AN OBJECT
function reducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "MULTI":
            return Math.floor(state / 2);
        case "DEV":
            return Math.floor(state * 2);
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;