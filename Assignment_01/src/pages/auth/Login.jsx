import React from "react";

import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../features/authSlice";
import FormLogin from "../../components/forms/login/FormLogin";
import authApi from "../../api/authApi";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerSubmit = async (email, password) => {
    try {
      const res = await authApi.login({ email, password });
      console.log(res);

      if (res.status === 0) throw new Error(res.message);
      dispatch(authActions.login(res.result));
      navigate("/trans");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["login"]}>
      <h1>Login</h1>
      <FormLogin onFormSubmit={handlerSubmit} name={"Login"} />
    </div>
  );
};

export default Login;
