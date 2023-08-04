import React, { useContext } from "react";

import classes from "./Banner.module.css";
import { imgBaseUrl } from "../../constant/index.js";
import MovieContext from "../../store/movie-context.js";
import useFetch from "../../hook/useFetch.js";

const Banner = () => {
  const a = useContext(MovieContext);
  const dispatchMovie = a.getMovie;

  useFetch(dispatchMovie, "fetchNetflixOriginals");

  let movieBanner;

  if (a.movies.fetchNetflixOriginals?.results?.length > 0) {
    movieBanner =
      a.movies.fetchNetflixOriginals.results[
        Math.floor(
          Math.random() * a.movies.fetchNetflixOriginals.results.length - 1
        )
      ];
  }

  return (
    <>
      {movieBanner && (
        <div
          className={classes["banner"]}
          style={{
            backgroundImage: `url(${imgBaseUrl}/${movieBanner.backdrop_path})`,
          }}
        >
          <div className={classes["content"]}>
            <h3 className={classes["title"]}>{movieBanner.name}</h3>
            <div className={classes["actions"]}>
              <div
                className={`${classes["action"]} ${classes["action__play"]}`}
              >
                <button>Play</button>
              </div>
              <div
                className={`${classes["action"]} ${classes["action__mylist"]}`}
              >
                <button>My List</button>
              </div>
            </div>
            <div className={classes["description"]}>{movieBanner.overview}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
