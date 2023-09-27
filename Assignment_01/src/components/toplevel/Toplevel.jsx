import React from "react";
import styles from "./Toplevel.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/authSlice";

const Toplevel = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handlerLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={styles["top-level"]}>
      <div className={styles["inner"]}>
        <div className={styles["top-level__logo"]}>
          <Link to={"/"}>Booking</Link>
        </div>
        <div className={styles["top-level__actions"]}>
          {isLoggedIn ? (
            <>
              <span>{user?.email}</span>
              <Link to="/trans" className={styles["top-level__login"]}>
                Transactions
              </Link>
              <Link
                to={""}
                onClick={handlerLogout}
                className={styles["top-level__login"]}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className={styles["top-level__login"]}>
                Login
              </Link>

              <Link to="/signup" className={styles["top-level__register"]}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Toplevel;
