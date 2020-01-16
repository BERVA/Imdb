import React from "react";
import Movie from "./movie.js";
import "./moviesList.css";

function MoviesList() {
  return (
    <div className="movies--list">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}

export default MoviesList;
