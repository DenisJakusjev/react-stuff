export const deposit = (payload) => {
    return {
        type: "DEPOSIT",
        payload: payload
    }
}

//withdraw
export const withdraw = (payload) => {
    return {
        type: "WITHDRAW",
        payload: payload
    }
}

// collect interest
export const collectInterest = () => {
    return {
        type: "COLLECT_INTEREST",
    }

}

//delete Account
export const deleteAccount = () => {
    return {
        type: "DELETE_ACCOUNT"
    }
}

export const toggleAccount =()=>{
    return {
        type:"TOGGLE"
    }
}
