import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'
import SearchForm from '../SearchForm/SearchForm.js'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'

function SavedMovies() {
  return (
    <div className="savedMovies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
    </div>
  );
}

export default SavedMovies;