import React, { useState, useEffect } from "react";

function Movie(props) {
 


  return (
    <div className="card movie">
      <div className="movie--poster">
        <img src={props.src} alt="" />
      </div>
      <div className="movie--title">{props.movieTitle}</div>
    </div>
  );
}

export default Movie;
