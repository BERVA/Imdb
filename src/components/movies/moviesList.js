import React from "react";
import Movie from "./movie.js";
import "./moviesList.css";

const movieList = [
    {
        src: "https://cdn.collider.com/wp-content/uploads/2019/03/avengers-endgame-poster.jpg",
        movieTitle: "Avengers Endgame"
    },
    {
        src: "https://cutt.ly/vrc78CV",
        movieTitle: "Star Wars Rise Of Skywalker"
    },
    {
        src: "https://cutt.ly/2rc77RM",
        movieTitle: "DUNKIRK"
    },
    {
        src: "https://cutt.ly/Erc5ebV",
        movieTitle: "The Irishman"
    },
    {
        src: "https://cutt.ly/xrc5atQ",
        movieTitle: "No Time To Die"
    }

];

function MoviesList() {
  return (



      <div className="movie-section">
          <h3> Featured today </h3>
      <div className="movies--list">
          {movieList.map( (data, key) => {
              return <Movie key={key} src={data.src} movieTitle={data.movieTitle}/>
          })}
      </div>
      </div>

  );
}



export default MoviesList;
