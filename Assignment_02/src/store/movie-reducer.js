import type from "./reducer-type.js";

export const movieInitialState = {
  fetchActionMovies: [],
  fetchComedyMovies: [],
  fetchDocumentaries: [],
  fetchHorrorMovies: [],
  fetchNetflixOriginals: [],
  fetchRomanceMovies: [],
  fetchSearch: [],
  fetchTrending: [],
  fetchTopRated: [],
  fetchGenres: [],
  fetchMediaTypes: [],
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case type.fetchActionMovies:
      state.fetchActionMovies = action.payload;
      return { ...state };

    case type.fetchComedyMovies:
      state.fetchComedyMovies = action.payload;
      return { ...state };

    case type.fetchDocumentaries:
      state.fetchDocumentaries = action.payload;
      return { ...state };

    case type.fetchHorrorMovies:
      state.fetchHorrorMovies = action.payload;
      return { ...state };

    case type.fetchNetflixOriginals:
      state.fetchNetflixOriginals = action.payload;
      return { ...state };

    case type.fetchRomanceMovies:
      state.fetchRomanceMovies = action.payload;
      return { ...state };

    case type.fetchSearch:
      state.fetchSearch = action.payload;
      return { ...state };

    case type.fetchTopRated:
      state.fetchTopRated = action.payload;
      return { ...state };

    case type.fetchTrending:
      state.fetchTrending = action.payload;
      return { ...state };
    case type.fetchGenres:
      state.fetchGenres = action.payload;
      return { ...state };
    case type.fetchMediaTypes:
      state.fetchMediaTypes = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
