import React, { useContext, useState } from "react";
import SingleMovie from "../SingleMovie/SingleMovie.js";
import MovieContext from "../../store/movie-context.js";
import useFetch from "../../hook/useFetch.js";
import MovieDetail from "../MovieDetail/MovieDetail.js";
import Slider from "react-slick";

import classes from "./MovieList.module.css";

const MovieList = ({ type, title, isPoster = true, order }) => {
  const [isShowDetail, setIsShowDetail] = useState({
    isShow: false,
    movieId: null,
  });

  // Slider config
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isPoster ? 10 : 7,
    slidesToScroll: 5,
  };

  const [movieDetail, setMovieDetail] = useState();

  // Movie Context
  const moviesData = useContext(MovieContext);
  const dispatchMovie = moviesData.getMovie;

  // Fetch data
  useFetch(dispatchMovie, type);

  const movieList = moviesData.movies[type].results;

  const handlerShowMovieDetail = (e, i) => {
    // get movie by index
    const movie = movieList[i];

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
    <div
      className={classes["wrapper"]}
      style={{ order: order }}
    >
      {/* UI list movie */}
      <div className="inner">
        {title && <h3 className={classes["title"]}>{title}</h3>}

        <Slider {...settings}>
          {movieList &&
            movieList.length > 0 &&
            movieList.map((movie, i) => (
              <div
                key={`${movie.backdrop_path}+${Math.random()}`}
                onClick={(e) => handlerShowMovieDetail(e, i)}
              >
                <SingleMovie
                  movieData={movie}
                  isPoster={isPoster}
                />
              </div>
            ))}
        </Slider>
      </div>
      {/* UI movie details */}
      <div className="outer">
        {isShowDetail.isShow && <MovieDetail videoData={movieDetail} />}
      </div>
    </div>
  );
};

export default MovieList;
