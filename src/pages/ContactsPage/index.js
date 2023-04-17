import React from 'react'
import { Outlet } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import { useDatabaseSearch } from '../../hooks/useDatabaseSearch';


const ContactsPage = () => {
    const {results, handleChange} = useDatabaseSearch("users", "name")

  return (
    <>
      <SearchBar text="search users" onChange={handleChange} results={results} display={Display}/>
      
    </>
    
  );
}

const Display = (result) => {
  return (
    <>
    <h1>{result.name}</h1>
    <p style={{color: 'var(--color-darkGray)', overflowX: 'word-break'}}>{"#" + result.id}</p>
    </>
  )
}

export default ContactsPage;