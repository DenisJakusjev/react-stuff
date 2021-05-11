import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//To Create Store
import {createStore} from "redux"
import {bankingReducer} from "./reducers/bankingReducers"
//Wrapper so our store works
import {Provider} from "react-redux"
//Так как рут редюсер создан в индекс.жс - не нужно указывать файл
import rootReducer from "./reducers"


//Const you like, need to pass in reducer in to createStore(function)
//Reducers in reducers folder
const store = createStore(rootReducer,
    //Чтобы отслеживать в редукс дев тулсах
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById("root"));

//Actions
//Deposit
