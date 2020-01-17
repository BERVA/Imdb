import React from "react";
import Movie from "./movie.js";
import "./moviesList.css";

function MoviesList() {
  return (
    <div className="movies--list">
      <Movie src="https://cdn.collider.com/wp-content/uploads/2019/03/avengers-endgame-poster.jpg" movieTitle="Avengers Endgame"/>
      <Movie src="https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg" movieTitle="IO"/>
      <Movie src="https://cutt.ly/vrc78CV" movieTitle="Star Warks Rise Of Skywalker"/>
      <Movie src="https://cutt.ly/2rc77RM" movieTitle="DUNKIRK"/>
      <Movie src="https://cutt.ly/Erc5ebV" movieTitle="The Irishman"/>
      <Movie src="https://cutt.ly/xrc5atQ" movieTitle="No Time To Die"/>
    </div>
  );
}

export default MoviesList;
