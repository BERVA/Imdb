import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header.js";
import Hero from "./components/hero/hero.js";
import MoviesList from "./components/movies/moviesList.js";
import Footer from "./components/footer/footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default App;
