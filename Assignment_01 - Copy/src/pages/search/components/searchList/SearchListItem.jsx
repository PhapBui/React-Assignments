import React from "react";

import styles from "./SearchListItem.module.css";

const SearchListItem = ({ data }) => {
  return (
    <div className={styles["hotel-item"]}>
      {/* Thumbnail */}
      <div className={styles["hotel-item_left"]}>
        <img
          className={styles["hotel-item__image_url"]}
          alt={data.name}
          src={data.image_url}
        />
      </div>
      {/* Content */}
      <div className={styles["hotel-item_right"]}>
        {/* header */}
        <div className={styles["hotel-item__header"]}>
          <h2 className={styles["hotel-item__name"]}>{data.name}</h2>
          <span className={styles["hotel-item__rate_text"]}>
            {data.rate_text}
          </span>
          <span className={styles["hotel-item__rate"]}>{data.rate}</span>
        </div>

        {/* body */}
        <div className={styles["hotel-item__body"]}>
          <span className={styles["hotel-item__distance"]}>
            {data.distance}
          </span>
          <p className={styles["hotel-item__tag"]}>{data.tag}</p>
          <div className={styles["hotel-item__description"]}>
            {data.description}
          </div>
        </div>

        {/* footer */}
        <div className={styles["hotel-item__footer"]}>
          <div className={styles["hotel-item__footer-left"]}>
            <div className={styles["hotel-item__type"]}>{data.type}</div>
            {data.free_cancel && (
              <div className={styles["hotel-item__free_cancel"]}>
                <h4>Free cancellation</h4>
                <p>You can cancel later, so lock in this greate price today!</p>
              </div>
            )}
          </div>
          <div className={styles["hotel-item__footer-right"]}>
            <div className={styles["hotel-item__price"]}>
              <div>${data.price}</div>
              <p>Includees taxes and fees</p>
            </div>
            <button className={styles["hotel-item__price"]}>
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
