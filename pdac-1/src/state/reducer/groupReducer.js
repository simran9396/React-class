const initialState = {
    data: [{
        name: "simran",
        sname: "pathan",
        desc: "create Reducers"
    },
    {
        name: "simran",
        sname: "pathan",
        desc: "create Reducers"
    },
    {
        name: "simran",
        sname: "pathan",
        desc: "create Reducers"
    },
    {
        name: "simran",
        sname: "pathan",
        desc: "create Reducers"
    }]
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GROUP":
            return {
                ...state, data: [...state.data, action.data]
            }
            default:
                return state;
    }
}