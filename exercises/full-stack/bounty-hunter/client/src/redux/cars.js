const initialState = {
    data: []
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CAR":
            return {
                data: [...state.data, action.carObject]
            }
        case "EDIT_CAR":
            return {
                data: state.data.map((carObject, i) => {
                    if (i === action.index) {
                        return {...carObject, ...action.editedCarObject};
                    } else {
                        return carObject;
                    }
                })
            }
        case "REMOVE_CAR":
            return {
                data: state.data.filter((car, i) => i !== action.index)
            }
        case "RESET":
            return {
                data: initialState.data
            }
        default:
            return state
    }
}
// console.log(initialState.data);

// action creator
export const addCar = carObject => {
    return {
        type: "ADD_CAR",
        carObject
    }
}

export const editCar = (index, editedCarObject) => {
    return {
        type: "EDIT_CAR",
        index,
        editedCarObject
    }
}

export const removeCar = index => {
    return {
        type: "REMOVE_CAR",
        index
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}



export default carReducer;