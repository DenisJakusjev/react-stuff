import {combineReducers} from "redux"
import bankingReducer from "./bankingReducers"
import loginReducer from "./loginReducer"



const rootReducer = combineReducers({
    loginReducer: loginReducer,
    bankingReducer:bankingReducer
})


export default rootReducer