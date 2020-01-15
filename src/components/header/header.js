import React from "react";
import "./header.css";
import SearchBar from "./searchBar.js";
import WatchList from "./watchList.js";
import User from "./user.js";

function Header() {
  return (
    <div className="header">
      <div>
        <h1>IMDB</h1>
      </div>
      <SearchBar />
      <WatchList />
      <User />
    </div>
  );
}

export default Header;
