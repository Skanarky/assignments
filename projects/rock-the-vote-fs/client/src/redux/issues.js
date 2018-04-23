import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ISSUES":
            return {
                ...state,
                data: action.issues,
                loading: false
            }
        case "ADD_ISSUE":
            return {
                ...state,
                data: [...state.data, action.issues],
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

export const getIssues = () => {
    return dispatch => {
        axios.get(`/issues/ `)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "GET_ISSUES",
                issues: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

export const addIssue = (issue) => {
    return dispatch => {
        axios.post(`/issues/`, issue)
        .then(response => {
            // console.log(response.data);
            dispatch({
                type: "ADD_ISSUE",
                issue
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

export default issueReducer;