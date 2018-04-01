import React from "react";

// import ComponChild from "./ComponChild/ComponChild";

class Cstate extends React.Component {
    constructor(props) {
        super(props);
        // this.initialState = {
        //     inputs: {
        //         //we can use props to set initial state if we want to:
        //         firstName: props.firstName || "",
        //         lastName: props.lastName || "",
        //         email: props.email || ""
        //     },
        //     people: []
        // }
        this.state = {
            // inputs: {
            //     firstName: "",
            //     lastName: "",
            //     email: ""
            // },
            // people: []
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.handleEvent = this.handleEvent.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //take the value from the input, and set state accordingly
        
        // const { value, name } = event.target;
        this.setState(prevState => {
            return {
                // inputs: {
                //     we need prev state so that we can include all the values that we HAVENT changed:
                    
                //     ...prevState.inputs,
                //     change the ONE value we do want to change:
                    
                //     [name]: value
                // }
            }
        });
    }

    // handleEvent(event) {}
    handleSubmit(event) {
        event.preventDefault();
        
        //-------------
        // if static set to {} only
        // this.setState({})
        //-------------

        this.setState(prevState => {
            return {
                
                // reset the form inputs back to their original state
                
                // inputs: this.state.inputs
                // and include the new object in the array
                // people: [...prevState.people, prevState.inputs]
            }
        });
    }

    render() {
        // const { } = this.state.inputs;
        // const { } = this.state;
        return (
            <div>

            </div>
        )
    }
}

export default Cstate;