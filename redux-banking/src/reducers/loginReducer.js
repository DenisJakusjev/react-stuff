const initialState = {
    login: false
}


export const loginReducer = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        case "LOGIN":
            newState.login = !newState.login
            return newState
        default:
            return state
    }
}


export default loginReducer