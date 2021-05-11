import React from 'react'
//Чтобы получить переменную из редакса нам нужен
import {useSelector} from "react-redux"

const Balance = () => {
    const store = useSelector(state => state.bankingReducer.balance)
    return (
        <div>
            <h1>{store}</h1>
        </div>
    )
}

export default Balance
