import React from "react";

import styles from "./HotelTypeBlock.module.css";

const HotelTypeBlock = ({ data }) => {
  return (
    <div className={styles["hotel-type-block"]}>
      <div
        className={styles["hotel-type-block__thumbnail"]}
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className={styles["hotel-type-block__description"]}>
        <h3 className={styles["hotel-type-block__name"]}>{data.name}</h3>
        <p className={styles["hotel-type-block__quatity"]}>
          {data.count} hotels
        </p>
      </div>
    </div>
  );
};

export default HotelTypeBlock;
