import React from 'react'
import "./searchbar.css"
import {ReactComponent as MagnifyingGlass} from "../../assets/magnifyingGlass.svg"
import {ReactComponent as Sort} from "../../assets/sort.svg"
const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div for="searchInput" className="searchbar-input">
        <input id="searchInput"  placeholder="Insert Seller"/>
        <MagnifyingGlass className="searchbar-icon"/>      
      </div>
      <button className="search-menu-button">
        <Sort className="sort-button-icon"/>
      </button>
      <button className="search-menu-button" id="search-menu-add-button">+</button>      
    </div>
  )
}

export default SearchBar