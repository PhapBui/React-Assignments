import React from "react";

import styles from "./SearchListItem.module.css";
import { Link } from "react-router-dom";

const SearchListItem = ({ data }) => {
  return (
    <div className={styles["hotel-item"]}>
      {/* Thumbnail */}
      <div className={styles["hotel-item_left"]}>
        <img
          className={styles["hotel-item__image_url"]}
          alt={data.name}
          src={data.photos[0]}
        />
      </div>
      {/* Content */}
      <div className={styles["hotel-item_right"]}>
        {/* header */}
        <div className={styles["hotel-item__header"]}>
          <h2 className={styles["hotel-item__name"]}>{data.name}</h2>
          <span className={styles["hotel-item__rate_text"]}>
            {data.rating > 4 ? "Excellent" : "Good"}
          </span>
          <span className={styles["hotel-item__rate"]}>{data.rating}</span>
        </div>

        {/* body */}
        <div className={styles["hotel-item__body"]}>
          <span className={styles["hotel-item__distance"]}>
            {data.distance}m from center
          </span>
          <div className={styles["hotel-item__type"]}>{data.type}</div>
          <div className={styles["hotel-item__description"]}>{data.desc}</div>
        </div>

        {/* footer */}
        <div className={styles["hotel-item__footer"]}>
          <div className={styles["hotel-item__footer-left"]}>
            {data.free_cancel && (
              <div className={styles["hotel-item__free_cancel"]}>
                <h4>Free cancellation</h4>
                <p>You can cancel later, so lock in this greate price today!</p>
              </div>
            )}
          </div>
          <div className={styles["hotel-item__footer-right"]}>
            <div className={styles["hotel-item__price"]}>
              <div>${data.cheapestPrice}</div>
              <p>Includees taxes and fees</p>
            </div>
            <Link to={`/detail/${data._id}`} className={styles["hotel-detail"]}>
              See availability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
