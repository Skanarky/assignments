import React from "react";
import {connect} from "react-redux";
import {increment, decrement, multi, dev} from "./../redux/redux";

const App = (props) => {
    return (
        <div  className="wrapper">
            <button onClick={props.decrement}>-</button>
            <button onClick={props.multi}>/2</button>
            <h2>{props.counter}</h2>
            <button onClick={props.increment}>+</button>
            <button onClick={props.dev}>*2</button>
        </div>
    )
}

// Two reasons to connect ot the store:
//  1. Does this component needs a data from the store
//  2. Does this component needs to dispatch actions


//Higher order comp - takes a component (higher order fn)

// coolFunction(2)(3) -> fn that returns a fn and then fires the return with the second parameter

// This is 2. we put IT IN A DIFF PLACE - THE REDUX PART
// function increment () {
//     return {
//         type: "INCREMENT"
//     }
// }

// This is 1.
function mapStateToProps(entireStateInstanceImput) {
    return {
        counter: entireStateInstanceImput
    }
}

export default connect(mapStateToProps, {increment, decrement, multi, dev})(App);
