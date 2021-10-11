import React, { useState, useEffect } from "react";

function Movie(props) {
 


  return (
    <div className="card movie">
      <div className="movie--poster">
        <img src={props.src} alt="" />
      </div>
      <div className="movie--title"><h3>{props.movieTitle}</h3></div>
    </div>
  );
}

export default Movie;
