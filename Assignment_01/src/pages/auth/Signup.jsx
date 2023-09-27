import React from "react";

import styles from "./Signup.module.css";
import authApi from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/forms/login/FormLogin";

const Signup = () => {
  const navigate = useNavigate();

  const handlerSubmit = async (email, password) => {
    try {
      const res = await authApi.signup({ email, password });
      if (res.status === 0) throw new Error(res.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles["signup"]}>
      <h1>Signup</h1>
      <FormLogin onFormSubmit={handlerSubmit} name="Create Account" />
    </div>
  );
};

export default Signup;
