import React, { useState } from "react";

function SearchBar() {
  const [searchBarVal, setSearchBarVal] = useState("");

  const inputChanged = event => {
    this.setState({
      search: event.target.value
    });
  };

  return (
    <div className="searchBar--container">
      <input
        type="text"
        className="searchBar"
        value={searchBarVal}
        onChange={e => setSearchBarVal(e.target.value)}
        onKeyPress={e => {
          e.key === "Enter"
            ? console.log(e.target.value)
            : console.log("not enter");
        }}
      ></input>
      <button className="searchBar--button">
        <svg
          className="bi bi-search"
          width="100%"
          height="100%"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
