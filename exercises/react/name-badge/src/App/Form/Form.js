import React from "react";
import List from "./List/List";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                nameF: "",
                nameL: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favouriteFood: "",
                extra: ""
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
                    nameL: "",
                    email: "",
                    placeOfBirth: "",
                    phone: "",
                    favouriteFood: "",
                    extra: ""
                },
                names: [...prevSt.names, prevSt.inputs]
            }
        });
    }

    render() {
        const { nameF, nameL, email, placeOfBirth, phone, favouriteFood, extra } = this.state.inputs;
        const { names } = this.state;
        const sendProps = names.map((objNames, i) => <List  {...objNames} key={objNames.nameF + i} index={i} />);

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} name="nameF" value={nameF} type="text" placeholder="First Name Here" />
                        <input onChange={this.handleChange} name="nameL" value={nameL} type="text" placeholder="Last Name Here" />
                        <input onChange={this.handleChange} name="email" value={email} type="email" placeholder="Email" />
                        <input onChange={this.handleChange} name="placeOfBirth" value={placeOfBirth} type="text" placeholder="Place of Birth" />
                        <input onChange={this.handleChange} name="phone" value={phone} type="number" placeholder="Phone No. (10 figures, no '-', '.' or '/')" />
                        <input onChange={this.handleChange} name="favouriteFood" value={favouriteFood} type="text" placeholder="Favourite Food" />
                    </div>
                    <input className="big" onChange={this.handleChange} name="extra" value={extra} type="text" placeholder="Extra Info" />
                    {nameF.length < 3 || nameL.length < 3 || email.length < 3 || placeOfBirth.length < 3 || phone.length !== 10 || favouriteFood.length < 3 || extra.length < 3
                        ? <p><button disabled>Min 3 char. in all fields</button></p>
                        : <p><button>Submit</button></p>
                    }
                </form>
                <div className="order">
                    {sendProps}
                </div>
            </div>
        )
    }
}

export default Form;