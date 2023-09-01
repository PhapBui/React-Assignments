import React, { useContext, useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../image/SearchIcon.jsx";

import { baseUrl } from "../../constant/index.js";
import MovieContext from "../../store/movie-context.js";
import type from "../../store/reducer-type.js";
import requests from "../../store/request.js";
import classes from "./SearchForm.module.css";
import useFetch from "../../hook/useFetch.js";

const SearchForm = () => {
  const [keyword, setKeyword] = useState();
  const [advSearchValue, setAdvSearchValue] = useState({
    genre: "",
    mediaType: "",
    language: "",
    year: new Date().getFullYear(),
  });

  const [isShowAdvSearch, setIsShowAdvSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputSearchRef = useRef();

  const movies = useContext(MovieContext);
  const searchDispatch = movies.getMovie;

  useFetch(searchDispatch, type.fetchGenres);
  useFetch(searchDispatch, type.fetchMediaTypes);

  useEffect(() => {
    if (keyword) {
      const fetchMovie = async () => {
        try {
          const res = await fetch(`${baseUrl}${requests.fetchSearch}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...advSearchValue, keyword: keyword }),
          });
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
  }, [keyword, searchDispatch, advSearchValue]);

  const handlerSearchSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() === "") {
      alert("plz enter a keyword");
      return;
    }
    setKeyword(searchValue);
  };

  const handlerInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handlerResetSearch = () => {
    setSearchValue("");
    setKeyword("");
    searchDispatch({
      payload: [],
      type: type.fetchSearch,
    });
    inputSearchRef.current.focus();
  };

  const handlerShowAdvanceSearch = (e) => {
    e.preventDefault();
    setIsShowAdvSearch((prev) => !prev);
  };

  const handlerGenreChange = (e, type) => {
    const newOption = advSearchValue;
    newOption[type] = e.target.value;

    setAdvSearchValue((prev) => ({ ...newOption }));
  };

  const { fetchGenres, fetchMediaTypes } = movies.movies;

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
            className={classes["action__advance_search"]}
            onClick={handlerShowAdvanceSearch}
          >
            Advance Search
          </button>
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

          {/* adv search */}
          {isShowAdvSearch && (
            <div className={classes["search__options"]}>
              {/* media types */}
              <select
                name="mediaTypes"
                id="mediaTypes"
                onChange={(e) => handlerGenreChange(e, "mediaType")}
                defaultValue={advSearchValue.mediaType}
              >
                <option value="" disabled>
                  Media Type
                </option>
                {fetchMediaTypes.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* genres */}
              <select
                name="genres"
                id="genres"
                onChange={(e) => handlerGenreChange(e, "genre")}
                defaultValue={advSearchValue.genre}
              >
                <option value="" disabled>
                  Genre
                </option>
                {fetchGenres.map((genre) => (
                  <option value={genre.id} key={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
              {/* Languages */}
              <select
                name="languages"
                id="languages"
                onChange={(e) => handlerGenreChange(e, "language")}
                defaultValue={advSearchValue.language}
              >
                <option value="" disabled>
                  Languages
                </option>
                {["en", "ja", "ko"].map((language) => (
                  <option value={language} key={language}>
                    {language}
                  </option>
                ))}
              </select>
              {/* Release date */}
              <input
                name="release"
                id="release"
                onChange={(e) => handlerGenreChange(e, "year")}
                value={advSearchValue.year}
                placeholder="Year release"
              />
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default SearchForm;
