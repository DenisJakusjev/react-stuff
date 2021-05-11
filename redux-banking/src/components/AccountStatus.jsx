import React from 'react'
import {useSelector} from "react-redux"


const AccountStatus = () => {
    const accountType = useSelector(state=> state.bankingReducer.accountType)
    return (
        <div>
            <h1>{accountType? "SavingsAccount" : "Checking Account" }</h1>
        </div>
    )
}

export default AccountStatus
