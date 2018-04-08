import { createStore, combineReducers } from "redux";

import carReducer from "./cars";

// gather reducers and cram them togehter in a store, and EXPORT it

const store = createStore(combineReducers({cars: carReducer}));
// !!! the Store WILL have a CARS { {data: [...] } }

// console.log(store.getState());
// store.subscribe(() => {
//     console.log(store.getState());
// })

export default store;