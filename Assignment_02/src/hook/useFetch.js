import { useEffect } from "react";
import { baseUrl } from "../constant/index.js";
import type from "../store/reducer-type.js";
import requests from "../store/request.js";

function useFetch(dispatchMovie, movieType) {
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${baseUrl}${requests[movieType]}`);
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
