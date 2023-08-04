import { useEffect } from "react";
import requests from "../store/request.js";
import { accessToken, baseUrl } from "../constant/index.js";
import type from "../store/reducer-type.js";

function useFetch(dispatchMovie, movieType) {
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${baseUrl}${requests[movieType]}`, {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });
        const movies = await res.json();
        dispatchMovie({
          payload: movies,
          type: type[movieType],
        });
      } catch (error) {
        throw error;
      }
    };
    fetchMovie();
  }, [dispatchMovie, movieType]);
}

export default useFetch;
