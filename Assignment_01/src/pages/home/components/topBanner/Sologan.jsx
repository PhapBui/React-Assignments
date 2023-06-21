import React from "react";
import styles from "./Sologan.module.css";
const Sologan = () => {
  return (
    <div className={styles["sologan"]}>
      <h2 className={styles["sologan__title"]}>
        A lifetime of discount? It's Genius
      </h2>
      <p className={styles["sologan__content"]}>
        Get rewarded fro your travels - unlock instant savings of 10% or more
        with a free account
      </p>
    </div>
  );
};

export default Sologan;
