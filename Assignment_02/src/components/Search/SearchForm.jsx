import React, { useContext, useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../image/SearchIcon.jsx";

import classes from "./SearchForm.module.css";
import requests from "../../store/request.js";
import { accessToken, baseUrl } from "../../constant/index.js";
import MovieContext from "../../store/movie-context.js";
import type from "../../store/reducer-type.js";

const SearchForm = () => {
  const [query, setQuery] = useState();
  const [searchValue, setSearchValue] = useState("");
  const inputSearchRef = useRef();

  const movies = useContext(MovieContext);
  const searchDispatch = movies.getMovie;

  useEffect(() => {
    inputSearchRef.current.focus();
    if (query) {
      const fetchMovie = async () => {
        try {
          const res = await fetch(
            `${baseUrl}${requests.fetchSearch}&keyword=${query}`,
            {
              headers: {
                Authorization: "Bearer " + accessToken,
              },
              method: "POST",
            }
          );
          const movies = await res.json();
          searchDispatch({
            payload: movies,
            type: type.fetchSearch,
          });
        } catch (error) {
          throw error;
        }
      };
      fetchMovie();
    }
    return () => {};
  }, [query, searchDispatch]);

  const handlerSearchSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() === "") {
      alert("plz enter a keyword");
      return;
    }
    setQuery(searchValue);
  };

  const handlerInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handlerResetSearch = () => {
    setSearchValue("");
    setQuery("");
    searchDispatch({
      payload: [],
      type: type.fetchSearch,
    });
    inputSearchRef.current.focus();
  };
  return (
    <>
      <form action="" className={classes["search__form"]}>
        <div className={classes["group__input"]}>
          <input
            type="text"
            value={searchValue}
            onChange={handlerInputChange}
            className={classes["search__input"]}
            ref={inputSearchRef}
          />
          <button
            type="submit"
            className={classes["search__submit"]}
            onClick={handlerSearchSubmit}
          >
            <SearchIcon />
          </button>
        </div>
        <div className={classes["search__actions"]}>
          <button
            className={classes["action__reset"]}
            onClick={handlerResetSearch}
          >
            Reset
          </button>
          <button
            className={classes["action__search"]}
            onClick={handlerSearchSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
