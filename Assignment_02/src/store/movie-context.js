import React, { useReducer } from "react";
import { movieInitialState, movieReducer } from "./movie-reducer.js";

const MovieContext = React.createContext();

export const MovieContextProvider = (props) => {
  const [movieState, movieDispatch] = useReducer(
    movieReducer,
    movieInitialState
  );

  return (
    <MovieContext.Provider
      value={{ movies: movieState, getMovie: movieDispatch }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
