import React from "react";
import styles from "./Section.module.css";
const Section = ({ style, children }) => {
  return (
    <section style={style}>
      <div className={styles["wrapper"]}>{children}</div>
    </section>
  );
};

export default Section;
