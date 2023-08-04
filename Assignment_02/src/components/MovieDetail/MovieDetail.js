import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

import classes from "./MovieDetail.module.css";
import { API_KEY, imgBaseUrl } from "../../constant/index.js";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjA4MDg2NWY5YzllN2RjNTRiM2Q2Y2IzYzU2MzkzYSIsInN1YiI6IjY0Yzc1MzViNjNlNmZiMDEzOGRhNzFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q9Zw9layIolQ0EYmBBWlnCUhu1aP5k2Layl40VDsZHE",
  },
};

const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const MovieDetail = ({ videoData }) => {
  const [videoDetail, setvideoDetail] = useState();
  const [isHaveVideo, setIsHaveVideo] = useState(false);
  const [key, setKey] = useState();

  const videoId = videoData?.id;

  // fetch single movie detail by videoId
  useEffect(() => {
    if (videoId) {
      const fetchVideo = async () => {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${API_KEY}`,
            options
          );
          const videoDetail = await res.json();
          setvideoDetail(videoDetail);
        } catch (error) {
          throw error;
        }
      };
      fetchVideo();
    }
  }, [videoId]);

  // check movie have can display and set youtube key
  useEffect(() => {
    if (videoDetail) {
      let isVideo = videoDetail.results?.some(
        (result) =>
          (result.type === "Teaser" || result.type === "Trailer") &&
          result.site === "YouTube"
      );
      setIsHaveVideo(isVideo);
      // set key
      let key = isVideo && videoDetail.results[0].key;
      setKey(key);
    }
  }, [videoDetail]);

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["content"]}>
        <div className={classes["content__left"]}>
          <h3 className={classes["title"]}>
            {videoData.name || videoData.title}
          </h3>
          <div className={classes["info"]}>
            <div className={classes["release"]}>
              <span className={classes["label"]}>Release Date: </span>
              <span className={classes["value"]}>
                {videoData.release_date || videoData.first_air_date}
              </span>
            </div>
            <div className={classes["rate"]}>
              <span className={classes["label"]}>Release Date: </span>
              <span className={classes["value"]}>
                {videoData.vote_average}/10
              </span>
            </div>
          </div>
          <div className={classes["detail"]}>{videoData.overview}</div>
        </div>
        <div className={classes["content__right"]}>
          {isHaveVideo ? (
            <YouTube
              videoId={key}
              opts={opts}
            />
          ) : (
            <img
              src={`${imgBaseUrl}${videoData.backdrop_path}`}
              alt={videoData.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
