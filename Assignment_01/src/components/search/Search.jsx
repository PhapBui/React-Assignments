import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faFemale } from "@fortawesome/free-solid-svg-icons";

import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";

import styles from "./Search.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const opts = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

const Search = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);
  const [isShow, setIsShow] = useState(false);

  const handlerClick = (e) => {
    e.preventDefault();
    window.location.replace("/search");
  };

  const handleDateChange = (item) => {
    setState([item.selection]);
  };

  const { startDate, endDate } = state[0];

  return (
    <form className={styles["search"]}>
      {/* Location */}
      <label
        className={styles["search__label"]}
        htmlFor="location"
      >
        <FontAwesomeIcon
          icon={faBed}
          className={styles["search__icon"]}
        />
        <input
          type="text"
          id="location"
          placeholder="Where are you going?"
          className={styles["search__input"]}
        />
      </label>

      {/* Calendar */}
      <label
        className={styles["search__label"]}
        htmlFor="calendar"
      >
        <FontAwesomeIcon
          icon={faCalendar}
          className={styles["search__icon"]}
        />
        <input
          type="text"
          id="calendar"
          onClick={() => setIsShow(true)}
          // onBlur={() => setIsShow(false)}
          placeholder={`${new Date(startDate).toLocaleDateString(
            "en",
            opts
          )} to ${new Date(endDate).toLocaleDateString("en", opts)}`}
          className={styles["search__input"]}
        />
        {isShow && (
          <div className={styles["date-picker"]}>
            <DateRange
              onChange={(item) => handleDateChange(item)}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={1}
              ranges={state}
              direction="horizontal"
            />
          </div>
        )}
        ;
      </label>

      {/* Peoples */}
      <label
        className={styles["search__label"]}
        htmlFor="peoples"
      >
        <FontAwesomeIcon
          icon={faFemale}
          className={styles["search__icon"]}
        />
        <input
          type="text"
          id="peoples"
          placeholder="1 adult - 0 children - 1 room"
          className={styles["search__input"]}
        />
      </label>

      {/* Submit */}
      <input
        className={styles["search__submit"]}
        type="submit"
        value="Search"
        onClick={handlerClick}
      />
    </form>
  );
};

export default Search;
