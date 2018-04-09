import { createStore, combineReducers } from "redux";

// GATHER reducers and cram them togehter in a store, and EXPORT the STORE:

import carReducer from "./cars";
// import truckReducer from "./trucks";


// !!! CREATE STORE here BELOW:

//const store = createStore(combineReducers({cars: carReducer, trucks: truckReducer}));


//-------
//The Store WILL have a CARS object in this form: -> { {data: [...] } }

// console.log(store.getState());
// store.subscribe(() => {
//     console.log(store.getState());
// })
//-------


// !!! EXPORT STORE here BELOW:
export default store;