import React from "react";
import axios from "axios";
import DataDisplay from "./DataDisplay/DataDisplay";

const swApiUrl = "https://swapi.co/api/";


class DataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(swApiUrl + "people")
            .then(response => {
                const { results } = response.data;
                // console.log(response);
                this.setState({
                    people: results,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    errMsg: err.message
                })
            })
    }
    render() {
        const { people, errMsg, loading } = this.state;
        // console.log(this.state);
        if (loading) {
            return <div>... Loading man, WAIT!</div>
        } else {
            if (errMsg) {
                return <p>Sorry, your data is not availble right now!</p>
            } else {
                return (
                    <div>
                        <DataDisplay people={people}></DataDisplay>
                        {/* render data here */}
                    </div>
                )
            }
        }
    }
}

export default DataContainer;