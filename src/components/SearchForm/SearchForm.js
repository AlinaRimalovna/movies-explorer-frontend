import React, { useState } from 'react';

function SearchForm({ handleSubmit }) {
  const [searchName, setSearchName] = useState(localStorage.getItem('searchName') || "");
  function handleSearch(e) {
    const search = e.target.value
    // setSearchName(e.target.value);
    setSearchName(search);
    localStorage.setItem('searchName', search);
  }
  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(searchName);
  }

  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <input className="searchForm__input" type="text" placeholder="Фильм" value={searchName || ""} onChange={handleSearch} required></input>
      <button className="searchForm__button"></button>
    </form>
  );
}

export default SearchForm;