import React from "react";

import classes from "./SingleMovie.module.css";
import { imgBaseUrl } from "../../constant/index.js";

const SingleMovie = ({ movieData, isPoster = true }) => {
  return (
    <>
      {movieData && (
        <div className={classes["movie"]}>
          <img
            src={`${imgBaseUrl}/${
              isPoster ? movieData.poster_path : movieData.backdrop_path
            }`}
            alt={`${movieData.name}`}
            style={{
              aspectRatio: ` ${isPoster ? 9 / 16 : 16 / 9}`,
            }}
          />
        </div>
      )}
    </>
  );
};

export default SingleMovie;
