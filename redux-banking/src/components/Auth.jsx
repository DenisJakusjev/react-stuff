import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/loginActions";

const Auth = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer.login);

  const toggleLogin = () => {
    dispatch(login());
  };
  return (
    <div>
      <button onClick={toggleLogin} className="btn btn-info">
        {state ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Auth;
