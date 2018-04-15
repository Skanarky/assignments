import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

// const access = {
//     auth: {
//         username: "PRXxcMDxIV9Z4GoO5KhCeKC4WwI5XSEwjuygaNpW",
//         password: "PV7SFPRv1SqE84Vh27QCGk3A7o1Y82pjP5lxMDMYFiNL1DYz0nrV2QCSeKIMJDCptqKOeYqFQnCAIPfcnAQaDa94sq0MlyXqxfmkjWsvS9mhb6fi5WooTJZgOqDX4S9r"
//     }
// };

const udemyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COURSE":
            return {
                ...state,
                data: action.courses,
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

// axios.get(`https://www.udemy.com/api-2.0/courses/?search=${searchWord}?page_size=40`, {
//             headers: "Authorization: Basic UFJYeGNNRHhJVjlaNEdvTzVLaENlS0M0V3dJNVhTRXdqdXlnYU5wVzpQVjdTRlBSdjFTcUU4NFZoMjdRQ0drM0E3bzFZODJwalA1bHhNRE1ZRmlOTDFEWXowbnJWMlFDU2VLSU1KRENwdHFLT2VZcUZRbkNBSVBmY25BUWFEYTk0c3EwTWx5WHF4Zm1raldzdlM5bWhiNmZpNVdvb1RKWmdPcURYNFM5cg=="
//         })

export const getCourses = (searchWord) => {
    return dispatch => {
        axios.get(`https://www.udemy.com/api-2.0/courses/?search=${searchWord}?page_size=40`, {
            authorization: //"Basic UFJYeGNNRHhJVjlaNEdvTzVLaENlS0M0V3dJNVhTRXdqdXlnYU5wVzpQVjdTRlBSdjFTcUU4NFZoMjdRQ0drM0E3bzFZODJwalA1bHhNRE1ZRmlOTDFEWXowbnJWMlFDU2VLSU1KRENwdHFLT2VZcUZRbkNBSVBmY25BUWFEYTk0c3EwTWx5WHF4Zm1raldzdlM5bWhiNmZpNVdvb1RKWmdPcURYNFM5cg=="
            {
            // PRXxcMDxIV9Z4GoO5KhCeKC4WwI5XSEwjuygaNpW: "PV7SFPRv1SqE84Vh27QCGk3A7o1Y82pjP5lxMDMYFiNL1DYz0nrV2QCSeKIMJDCptqKOeYqFQnCAIPfcnAQaDa94sq0MlyXqxfmkjWsvS9mhb6fi5WooTJZgOqDX4S9r"
            username: "PRXxcMDxIV9Z4GoO5KhCeKC4WwI5XSEwjuygaNpW",
            password: "PV7SFPRv1SqE84Vh27QCGk3A7o1Y82pjP5lxMDMYFiNL1DYz0nrV2QCSeKIMJDCptqKOeYqFQnCAIPfcnAQaDa94sq0MlyXqxfmkjWsvS9mhb6fi5WooTJZgOqDX4S9r"
            }
        }).then(response => {
            console.log(response.data);
            dispatch({
                type: "GET_COURSE",
                courses: response.data.results
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

export default udemyReducer;