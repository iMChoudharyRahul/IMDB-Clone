import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/Cards";
import { useMovieContext } from "../../createContext/MovieContext";

const MovieList = () => {
  const { moviesData, setMoviesData } = useMovieContext(); // Use the context hook
  const [moviePage, setMoviePage] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    (() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setMoviesData(data.results));
    })();
  }, [type, setMoviesData]);

  const pageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= moviesData.length / 10 &&
      selectedPage !== moviePage
    ) {
      setMoviePage(selectedPage);
    }
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {moviesData.slice(moviePage * 12 - 12, moviePage * 12).map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
      {moviesData.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => pageHandler(moviePage - 1)}
            className={moviePage > 1 ? "" : "disable__page"}
          >
            ◀
          </span>
          {[...Array(moviesData.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={moviePage === i + 1 ? "selected__page" : ""}
                onClick={() => pageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => pageHandler(moviePage + 1)}
            className={
              moviePage < moviesData.length / 10 ? "" : "disable__page"
            }
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default MovieList;
