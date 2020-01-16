import React from "react";
import "./hero.css";

function Hero() {
  const imgUrl =
    "https://fsmedia.imgix.net/00/bb/8a/01/d2a5/44c8/8948/71af2d463dbd/justice-league-movie-team-photojpg.jpeg?auto=compress&h=675&w=1200&crop=edges&fit=crop";

  return (
    <section className="hero--container">
      <div className="hero">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="hero--latest--movies">
        <div className="hero--latest--moviess-title">
          <h4>Latest Movies</h4>
        </div>
        <div className="latest--movie">
          <img src={imgUrl} alt="" />
        </div>
        <div className="latest--movie">
          <img src={imgUrl} alt="" />
        </div>
        <div className="latest--movie">
          <img src={imgUrl} alt="" />
        </div>
        <div className="hero--latest--movies--control">
          <button type="button">View All</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
