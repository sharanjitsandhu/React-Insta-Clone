import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-wrapper">
      <form>
        <i className="fa fa-instagram"> | Instagram</i>

        <input
          type="text"
          placeholder="Search"
          name="search"
          className="search"
        />

        <i className="far fa-compass icons" />
        <i className="far fa-heart icons" />
        <i className="far fa-user icons" />
      </form>
    </div>
  );
};

export default SearchBar;
