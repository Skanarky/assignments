import axios from "axios";

// const swapiUrl = "https://swapi.co/api/planets/";
const swapiUrl = "http://api.icndb.com/jokes/";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const planetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PLANET":
            return {
                ...state,
                data: action.planets,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                errMsg: action.errMsg,
                loading: false
            }
        default:
            return state
    }
}


// action creators:

export const getPlanets = () => {
    return dispatch => {
        axios.get(swapiUrl)
            .then(response => {
                // console.log(response.data.value);
                dispatch({
                    type: "GET_PLANET",
                    // planets: response.data.results
                    planets: response.data.value
                });
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, data is unavailable"
                });
            });
    }
}


export default planetReducer;