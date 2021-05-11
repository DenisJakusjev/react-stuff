
const initialState = {
    balance:0,
    accountType:true

}


//How basic redurec looks like, requires state and action
export const bankingReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        //logic for action typed DEPOSIT
        //We can never touch state itself, thats why redurecs have to return a new value modified by reducers
        case "DEPOSIT":
            newState.balance = newState.balance + parseInt(action.payload)
            return newState
        case "WITHDRAW":
            newState.balance = newState.balance - parseInt(action.payload)
            return newState
        case "COLLECT_INTEREST":
            newState.balance = newState.balance *1.03
            return newState
        case "DELETE_ACCOUNT":
            newState.balance = 0
            return newState
        case "TOGGLE":
            newState.accountType = !newState.accountType
            return newState
        //Switch requires default so we just simply returns state
        default:
            return state
    }

};



export default bankingReducer
