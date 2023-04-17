import React from 'react'
import "./searchbar.css"
import {ReactComponent as MagnifyingGlass} from "../../assets/magnifyingGlass.svg"
import {ReactComponent as Sort} from "../../assets/sort.svg"


const SearchBar = ({children, onChange, text, results, display}) => {
  return (
    <div className="searchbar-container">
      <div className="searchbar-input">
        <input id="searchInput" placeholder={text} onChange={onChange}/>
        <MagnifyingGlass className="searchbar-icon"/>
        <div className='searchbar-results'>
          {results && results.map((result) => (
            <SearchResult key={result.id}>
              {display(result)}
            </SearchResult>
          ))}
        </div>      
      </div>
      <button className="search-menu-button">
        <Sort className="sort-button-icon"/>
      </button>
      {children}  
    </div>
  )
}

const SearchResult = ({children}) => {
  return(
  <div className='searchbar-result'>
    {children}
  </div>
  );
}

export default SearchBar