import { API_KEY } from "../constant/index.js";

const requests = {
  fetchTrending: `/trending?token=${API_KEY}&language=en`,
  fetchNetflixOriginals: `?token=${API_KEY}`,
  fetchTopRated: `/top-rate?token=${API_KEY}&language=en`,
  fetchActionMovies: `/discover?token=${API_KEY}&genre=28`,
  fetchComedyMovies: `/discover?token=${API_KEY}&genre=35`,
  fetchHorrorMovies: `/discover?token=${API_KEY}&genre=27`,
  fetchRomanceMovies: `/discover?token=${API_KEY}&genre=10749`,
  fetchDocumentaries: `/discover?token=${API_KEY}&genre=99`,
  fetchSearch: `/search?token=${API_KEY}`,
  fetchGenres: `/genres?token=${API_KEY}`,
  fetchMediaTypes: `/media-types?token=${API_KEY}`,
};
export default requests;
