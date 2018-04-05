import React from "react";
import axios from "axios";
const swApiUrl = "https://swapi.co/api/people/";

class Person extends React.Component {
    
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            person: {},
            errMsg: "",
            loading: true
        }
    }
    
    getInfoFn = (num) => {
        // console.log(this.props.match);
        // const personUrl = this.props.match.params.num;
        axios.get(swApiUrl.concat(num))
            .then(response => {
                // console.log(response.data);
                const { data } = response;
                this.setState({
                    person: data,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    errMsg: err.message
                })
            })
    }

    componentDidMount() {
        this.getInfoFn(this.props.match.params.num);
    }

    componentWillReceiveProps(newProps) {
        // console.log(this.props.match);
        if (this.props.match.params.num !== newProps.match.params.num) {
            this.setState({
                loading: true
            });
            this.getInfoFn(newProps.match.params.num);
        }  
    }


    
    //1
    render() {
        // console.log(this.state);
        // console.log(this.props);
        const { person, errMsg, loading } = this.state;
        if (loading) {
            return <h1 style={{color: "green"}}>... Loading</h1>
        } else {
            if (errMsg) {
                return <p>Sorry, data is not availble right now!</p>
            } else {
                return (
                    <div>
                        <h2 style={{color: "rgba(128, 128, 128, 0.85)", borderBottom: "30px solid transparent", textDecorationLine: "underline"}}>{person.name}</h2>
                        <h3 style={{color: "rgba(207, 5, 5, 0.7)"}}>Height: {person.height}</h3>
                        <h3 style={{color: "rgba(207, 5, 5, 0.7)"}}>Weight: {person.mass}</h3>
                        <h3 style={{color: "rgba(207, 5, 5, 0.7)"}}>Hair Color: {person.hair_color}</h3>
                        <h3 style={{color: "rgba(207, 5, 5, 0.7)"}}>Eye Color: {person.eye_color}</h3>
                        <h3 style={{color: "rgba(207, 5, 5, 0.7)"}}>Gender: {person.gender}</h3>
                    </div>
                )
            }
        }
    }

    // render() {
    //     console.log(this.props);
    //     const personIndex = this.props.match.params.num;
    //     const person = JSON.parse(sessionStorage.getItem("swPeople"))[personIndex];
    //     return (
    //         <div>
    //             <h2 style={{ color: "rgba(128, 128, 128, 0.85)", borderBottom: "30px solid transparent", textDecorationLine: "underline" }}>{person.name}</h2>
    //             <h3 style={{ color: "rgba(207, 5, 5, 0.7)" }}>Height: {person.height}</h3>
    //             <h3 style={{ color: "rgba(207, 5, 5, 0.7)" }}>Weight: {person.mass}</h3>
    //             <h3 style={{ color: "rgba(207, 5, 5, 0.7)" }}>Hair Color: {person.hair_color}</h3>
    //             <h3 style={{ color: "rgba(207, 5, 5, 0.7)" }}>Eye Color: {person.eye_color}</h3>
    //             <h3 style={{ color: "rgba(207, 5, 5, 0.7)" }}>Gender: {person.gender}</h3>
    //         </div>
    //     )
    // }
}

export default Person;