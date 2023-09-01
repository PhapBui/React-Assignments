import { API_KEY } from "../constant/index.js";

const requests = {
  fetchTrending: `/trending?token=${API_KEY}&language=en`,
  fetchNetflixOriginals: `?token=${API_KEY}`,
  fetchTopRated: `/top-rate?token=${API_KEY}&language=en`,
  fetchActionMovies: `/discover?token=${API_KEY}&genre_id=28`,
  fetchComedyMovies: `/discover?token=${API_KEY}&genre_id=35`,
  fetchHorrorMovies: `/discover?token=${API_KEY}&genre_id=27`,
  fetchRomanceMovies: `/discover?token=${API_KEY}&genre_id=10749`,
  fetchDocumentaries: `/discover?token=${API_KEY}&genre_id=99`,
  fetchSearch: `/search?token=${API_KEY}`,
};
export default requests;
