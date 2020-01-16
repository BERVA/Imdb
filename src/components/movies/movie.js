import React, { useState, useEffect } from "react";

function Movie() {
  const [title, setTitle] = useState("Avengers EndGame");

  const imgUrl =
    "https://cdn.collider.com/wp-content/uploads/2019/03/avengers-endgame-poster.jpg";

  return (
    <div className="card movie">
      <div className="movie--poster">
        <img src={imgUrl} alt="" />
      </div>
      <div className="movie--title">{title}</div>
    </div>
  );
}

export default Movie;
