import React, { useEffect } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/Cards";
import { useMovieContext } from "../../createContext/MovieContext";

const MovieList = () => {
  const { moviesData, setMoviesData } = useMovieContext(); // Use the context hook
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMoviesData(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {moviesData.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
