import React from "react";

import List from "./List/List";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                nameF: "",
                nameL: ""
            },
            names: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value, name } = event.target;
        // console.log(event);
        this.setState(prevSt => {
            return {
                inputs: {
                    ...prevSt.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevSt => {
            return {
                inputs: {
                    nameF: "",
                    nameL: ""
                },
                names: [...prevSt.names, prevSt.inputs]
            }
        });
    }

    render() {
        const { nameF, nameL } = this.state.inputs;
        const { names } = this.state;

        return (
            <div className="place">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} name="nameF" value={nameF} type="text" placeholder="First Name Here" />
                        <input onChange={this.handleChange} name="nameL" value={nameL} type="text" placeholder="Last Name Here" />
                        <button>Submit</button>
                    </div>
                    <div className="fixit">
                        <h2>{nameF} {nameL}</h2>
                    </div>
                </form>
                <ol>
                    <h3>List:</h3>
                    {names.map((objNames, i) => <List {...objNames} key={objNames.nameF + i} index={i} />)}
                </ol>
            </div>
        )
    }
}

export default Form;