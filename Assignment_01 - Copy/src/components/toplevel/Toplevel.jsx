import React from "react";
import styles from "./Toplevel.module.css";

const Toplevel = () => {
  return (
    <div className={styles["top-level"]}>
      <div className={styles["top-level__logo"]}>
        <span>Booking Website</span>
      </div>
      <div className={styles["top-level__actions"]}>
        <button className={styles["top-level__register"]}>Register</button>
        <button className={styles["top-level__login"]}>Login</button>
      </div>
    </div>
  );
};

export default Toplevel;
