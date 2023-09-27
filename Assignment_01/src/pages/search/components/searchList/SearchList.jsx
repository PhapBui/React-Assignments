import React from "react";
import SearchListItem from "./SearchListItem.jsx";

import styles from "./SearchList.module.css";

const SearchList = ({ hotelList }) => {
  return (
    <div className={styles["search-results"]}>
      {hotelList?.length > 0 ? (
        hotelList.map((item) => (
          <div className={styles["search-item"]} key={item._id}>
            <SearchListItem data={item} />
          </div>
        ))
      ) : (
        <h1>Please enter your required!</h1>
      )}
    </div>
  );
};

export default SearchList;
