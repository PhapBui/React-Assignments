import React from "react";
import styles from "./SearchPopup.module.css";
const SearchPopup = () => {
  const handleOnchcange = () => {
    console.log("onChange");
  };

  return (
    <div>
      <form
        action=""
        className={styles["search-form"]}
      >
        <h2 className={styles["search-form__title"]}>Search</h2>
        <div className={styles["search-form__required"]}>
          <label htmlFor="destination">
            <h3 className={styles["search-form__sub-title"]}>Destination</h3>
            <input
              type="text"
              id="destination"
            />
          </label>
          <label htmlFor="check-in-date">
            <h3 className={styles["search-form__sub-title"]}>Check-in Date</h3>
            <input
              type="text"
              id="check-in-date"
              value="06/24/2022 to 06/24/2022"
              onChange={handleOnchcange}
            />
          </label>
        </div>

        <div className={styles["search-form__options"]}>
          <h3 className={styles["search-form__sub-title"]}>Options</h3>
          <label htmlFor="min-price">
            Min price per night
            <input
              type="number"
              id="min-price"
            />
          </label>

          <label htmlFor="max-price">
            Max price per night
            <input
              type="number"
              id="max-price"
            />
          </label>

          <label htmlFor="adult">
            Adult
            <input
              type="number"
              id="adult"
              value={1}
              onChange={handleOnchcange}
            />
          </label>

          <label htmlFor="children">
            Children
            <input
              type="number"
              id="children"
              value={0}
              onChange={handleOnchcange}
            />
          </label>

          <label htmlFor="room">
            Room
            <input
              type="number"
              id="room"
              value={1}
              onChange={handleOnchcange}
            />
          </label>
        </div>
        <input
          type="submit"
          value="Search"
          className={styles["search-form__submit"]}
        />
      </form>
    </div>
  );
};

export default SearchPopup;
