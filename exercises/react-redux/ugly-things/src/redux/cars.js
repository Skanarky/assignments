const initialState = {
    data: []
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CAR":
            return {
                data: [...state.data, action.carObject]
            }
        case "REMOVE_CAR":
            return {
                data: state.data.filter((car, i) => i !== action.index)
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

export const removeCar = index => {
    return {
        type: "REMOVE_CAR",
        index
    }
}



export default carReducer;