import React from "react";
import SearchPopup from "./components/searchPopup/SearchPopup.jsx";
import SearchList from "./components/searchList/SearchList.jsx";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["sidebar"]}>
        <SearchPopup />
      </div>
      <div className={styles["results"]}>
        <SearchList />
      </div>
    </div>
  );
};

export default Search;
