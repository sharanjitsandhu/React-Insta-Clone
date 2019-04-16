import React from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

const SearchBar = props => {
  return (
    <div className="search-wrapper">
      <i className="fa fa-instagram iconss"> | Instagram</i>
      <form>
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          name="search"
          onKeyDown={props.searchPosts}
        />
      </form>
      <i className="far fa-compass icons" />
      <i className="far fa-heart icons" />
      <i className="far fa-user icons" />

      <Link to="/login">
        <button className="logout-btn">Log out</button>
      </Link>
    </div>
  );
};

export default SearchBar;
