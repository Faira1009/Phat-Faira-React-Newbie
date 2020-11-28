import React from "react";
import '../assets/searchBar.css'
export function SearchBar(props) {
  return (
    <div className="searchBar">
      <input onKeyDown={props.onKeyDown} className="searchBarInput" type="text" placeholder="type in a city name" />
    </div>
  );
}
