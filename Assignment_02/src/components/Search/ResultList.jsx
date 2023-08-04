import React, { useContext, useState } from "react";
import MovieContext from "../../store/movie-context.js";
import SingleMovie from "../SingleMovie/SingleMovie.js";

import classes from "./ResultList.module.css";
import MovieDetail from "../MovieDetail/MovieDetail.js";

const ResultList = () => {
  const [isShowDetail, setIsShowDetail] = useState({
    isShow: false,
    movieId: null,
  });
  const [movieDetail, setMovieDetail] = useState();

  const movieData = useContext(MovieContext);
  const searchResults = movieData.movies.fetchSearch.results;

  const handlerShowMovieDetail = (e, i) => {
    // get movie by index
    const movie = searchResults[i];

    setIsShowDetail((prev) => {
      let { isShow, movieId } = prev;
      // check movie id, if same id toggle show else show new movie details
      if (movieId === movie.id) {
        isShow = !isShow;
      } else {
        movieId = movie.id;
        isShow = true;
      }
      return { isShow, movieId };
    });
    setMovieDetail(movie);
  };

  return (
    <div>
      {isShowDetail.isShow && <MovieDetail videoData={movieDetail} />}

      <h3>Search Result</h3>
      <div className={classes["movies"]}>
        {searchResults &&
          searchResults.map((result, i) => (
            <div
              className={classes["movie"]}
              key={result.id}
              onClick={(e) => handlerShowMovieDetail(e, i)}
            >
              <SingleMovie movieData={result} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResultList;
