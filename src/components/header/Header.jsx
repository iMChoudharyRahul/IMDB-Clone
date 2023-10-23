import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchBar from "../../pages/searchBar/SearchBar";
import { useMovieContext } from "../../createContext/MovieContext";

const Header = () => {
  const { setMoviesData } = useMovieContext(); // Use the context hook

  const searchMovie = (searchUrl) => {
    console.log("Checking...URL", searchUrl);
    if (searchUrl) {
      fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log("Check Data", data.results);
          setMoviesData(data.results);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="imdb-img"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="headerRight">
        <SearchBar onSearch={searchMovie} />
      </div>
    </div>
  );
};

export default Header;
