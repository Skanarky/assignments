import React from "react";

import { connect } from "react-redux";

import { getPlanets } from "./../../redux/planets";

import Planet from "./../Planet/Planet";

class PlanetList extends React.Component {

    componentDidMount() {
        this.props.getPlanets();
    }

    render() {
        console.log(this.props);
        const { data, loading, errMsg } = this.props;
        const mapData = data.map((planet, i) =>
            <Planet key={planet.name + i} index={i} {...planet} />)
        if (loading) {
            return (
                <div style={{color: "green", padding: "300px", fontSize: "5em"}}> ...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <ol>
                    {/* I'm PlanetList */}
                {mapData}
                </ol>
            )
        }
    }
}

// Two reasons to connect to the store:
//  1. Does this component needs a data from the store
//  2. Does this component needs to dispatch actions

function mapStateToProps(entireStateInstanceImput) {
    return entireStateInstanceImput.planets;
}

export default connect(mapStateToProps, { getPlanets })(PlanetList);