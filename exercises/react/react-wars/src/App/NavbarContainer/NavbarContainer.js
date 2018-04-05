import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const swApiUrl = "https://swapi.co/api/people/";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(swApiUrl)
            .then(response => {
                // console.log(response);
            const { results } = response.data;
            this.setState({
                people: results,
                loading: false
            });
            sessionStorage.setItem("swPeople", JSON.stringify(results));
        })
        .catch(err => {
            this.setState({
                errMsg: err.message
            })
        })
    }

    handleClick = (event) => {
        // event.preventDefault();
        console.log(event);
    }

    render() {
        const { people, errMsg, loading } = this.state;
        const linksArr = people.map((obj, i) => <Link onClick={() => this.handleClick()} key={obj.name + i} className="noline" to={`/${obj.url.charAt(obj.url.length - 2)}`}><span>{obj.name}</span></Link>);
        // const linksArrSess = JSON.parse(sessionStorage.getItem("swPeople")).map((obj, i) => <Link onClick={() => this.handleClick()} key={obj.name + i} className="noline" to={`/${i}`}><span>{obj.name}</span></Link>);
        
        if (loading) {
            return <h1 style={{color: "green"}}>... Loading</h1>
        } else {
            if (errMsg) {
                return <p>Sorry, data is not availble right now!</p>
            } else {
                return (
                    <nav>
                        <Link className="noline" to="/"><span>Home</span></Link>
                        {linksArr}
                        {/* {linksArrSess} */}
                    </nav>
                )
            }
        }
    }
}

export default Navbar;