import React, { useState } from "react";
import "./SearchBarStyle.css";

const SearchBar = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = () => {
    // Perform your search or submit action here
    if (searchText.trim() !== "") {
      let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${searchText}`;
      console.log("Check Url EndPoint", searchUrl);
      onSearch(searchUrl);
    }
  };

  return (
    <div className="search-bar">
      <div
        className={`search-icon ${isSearchOpen ? "hidden" : ""}`}
        onClick={toggleSearch}
      >
        <i className="fas fa-search"></i>
      </div>
      {isSearchOpen && (
        <div className="search-input-popup">
          <input
            type="text"
            placeholder="Search Your Movies"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          />
          <button type="submit" onClick={handleSearchSubmit}>
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
