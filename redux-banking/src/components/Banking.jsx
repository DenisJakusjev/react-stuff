import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {deposit,withdraw,collectInterest, deleteAccount, toggleAccount} from "../actions/bankingActions"

const Banking = () => {
  //Нужно создать его как перменную , может и не надо и можно просто юзать импорт?
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  //Нужно через диспатч отправлять екшены написанные вручную, вроде можно их импортировать 
//Можно вот так в диспатч запихать и будет гучи
//   {
//     type: "WITHDRAW",
//     payload: payload
// }
  const handleDeposit = () => {
    dispatch(deposit(amount));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(amount));
      setAmount("")
  };
  const handleCollect = () => {
    dispatch(collectInterest());
  };
  const handleDelete = () => {
    dispatch(deleteAccount());
  };
  const handleAccountType = () => {
   dispatch(toggleAccount())
  };

  return (
    <div className="form-group">
      <input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        type="text"
        className="from-control"
      />
      <button onClick={handleDeposit} className="btn btn-success">
        Deposit
      </button>
      <button onClick={handleWithdraw} className="btn btn-primary">
        Withdraw
      </button>
      <button onClick={handleCollect} className="btn btn-warning">
        Collect Interest
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete Account
      </button>
      <button onClick={handleAccountType} className="btn btn-secondary">
        Change Account Type
      </button>
    </div>
  );
};

export default Banking;
