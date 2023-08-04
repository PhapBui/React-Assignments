import React from "react";
import NavBar from "../browse/NavBar.jsx";
import SearchForm from "../../components/Search/SearchForm.jsx";
import ResultList from "../../components/Search/ResultList.jsx";

import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes["app"]}>
      <NavBar />
      <SearchForm />
      <ResultList />
    </div>
  );
};

export default Search;
