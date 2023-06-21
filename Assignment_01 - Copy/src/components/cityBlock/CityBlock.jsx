import React from "react";

import styles from "./CityBlock.module.css";

const CityBlock = ({ data }) => {
  return (
    <div className={styles["city-block"]}>
      <img
        className={styles["city-block__thumbnail"]}
        src={data.image}
        alt={data.name}
      />
      <div className={styles["city-block__description"]}>
        <h3 className={styles["city-block__name"]}>{data.name}</h3>
        <p className={styles["city-block__sub-text"]}>{data.subText}</p>
      </div>
    </div>
  );
};

export default CityBlock;
