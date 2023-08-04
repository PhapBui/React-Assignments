import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import MovieList from "../../components/MovieList/MovieList.js";
import NavBar from "./NavBar.jsx";
import classes from "./Browse.module.css";
// Config Movie List
const movieTypes = [
  {
    order: 1,
    title: "Original",
    isPoster: true,
    type: "fetchNetflixOriginals",
  },
  {
    order: 2,
    title: "Xu hướng",
    isPoster: false,
    type: "fetchTrending",
  },
  {
    order: 3,
    title: "Xếp hạng cao",
    isPoster: false,
    type: "fetchTopRated",
  },
  {
    order: 4,
    title: "Hành động",
    isPoster: false,
    type: "fetchActionMovies",
  },
  {
    order: 5,
    title: "Hài",
    isPoster: false,
    type: "fetchComedyMovies",
  },
  {
    order: 6,
    title: "Kinh dị",
    isPoster: false,
    type: "fetchHorrorMovies",
  },
  {
    order: 7,
    title: "Lãng mạn",
    isPoster: false,
    type: "fetchRomanceMovies",
  },
  {
    order: 8,
    title: "Tài liệu",
    isPoster: false,
    type: "fetchDocumentaries",
  },
];

function Browse() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <div className={classes["movie-lists"]}>
        {movieTypes.map((movieType) => (
          <MovieList
            key={movieType.title}
            title={movieType.title}
            isPoster={movieType.isPoster}
            type={movieType.type}
            order
          />
        ))}
      </div>
    </div>
  );
}

export default Browse;
