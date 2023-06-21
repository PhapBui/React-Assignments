import React from "react";
import styles from "./HotelBlock.module.css";

const HotelBlock = ({ data }) => {
  return (
    <div className={styles["hotel-block"]}>
      <div
        className={styles["hotel-block__thumbnail"]}
        style={{ backgroundImage: `url(${data.image_url})` }}
      >
        {" "}
      </div>
      <h3 className={styles["hotel-block__name"]}>
        <a href="/detail">{data.name}</a>
      </h3>
      <div className={styles["hotel-block__city"]}>{data.city}</div>
      <div className={styles["hotel-block__price"]}>
        Starting from ${data.price}
      </div>
      <div className={styles["hotel-block__review"]}>
        <div className={styles["hotel-block__rate"]}>{data.rate}</div>
        <div className={styles["hotel-block__type"]}>{data.type}</div>
      </div>
    </div>
  );
};

export default HotelBlock;
