import React from "react";
import styles from "./FormSubscribe.module.css";

const FormSubscribe = () => {
  return (
    <div className={styles["form-subscribe"]}>
      <h2 className={styles["form-subscribe__title"]}>
        Save time, sace money!
      </h2>
      <p className={styles["form-subscribe__cta"]}>
        Sign up and we'll send the best deals to you
      </p>
      <form className={styles["form-subscribe__form"]}>
        <input
          type="email"
          placeholder="Your email"
          className={styles["form-subscribe__input"]}
        />
        <button className={styles["form-subscribe__submit"]}>Subscribe</button>
      </form>
    </div>
  );
};

export default FormSubscribe;
