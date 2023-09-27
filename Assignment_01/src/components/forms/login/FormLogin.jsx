import React from "react";
import { useRef } from "react";

import styles from "./FormLogin.module.css";

const FormLogin = ({ onFormSubmit, name }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    onFormSubmit(enteredEmail, enteredPassword);
  };

  return (
    <form onSubmit={handlerSubmit} className={styles["form-control"]}>
      <input
        ref={emailRef}
        type="email"
        placeholder="Your email"
        autoComplete="username"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Your password"
        autoComplete="current-password"
      />
      <button type="submit">{name}</button>
    </form>
  );
};

export default FormLogin;
