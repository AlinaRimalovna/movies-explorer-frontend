import React from 'react';

function SearchForm() {
  return (
    <form className="searchForm">
      <input className="searchForm__input" type="text" placeholder='Фильм' required></input>
      <button className="searchForm__button"></button>
    </form>
  );
}

export default SearchForm;