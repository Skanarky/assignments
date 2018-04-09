import { createStore, combineReducers } from "redux";

// gather reducers and cram them togehter in a store, and EXPORT it
import carReducer from "./cars";
// import truckReducer from "./trucks";

//STORE
const store = createStore(combineReducers({cars: carReducer}));


// !!! the Store WILL have a CARS { {data: [...] } }

// console.log(store.getState());
// store.subscribe(() => {
//     console.log(store.getState());
// })

export default store;