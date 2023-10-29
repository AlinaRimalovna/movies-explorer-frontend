import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'
import SearchForm from '../SearchForm/SearchForm.js'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'

function SavedMovies({ handleSubmit, movies, myMovies, onMovieDelete, onMovieLike, onClick, isFound, isFilter, searchName, handleSearch }) {
  return (
    <div className="savedMovies">
      <SearchForm handleSubmit={handleSubmit} handleSearch={handleSearch} searchName={searchName} />
      <FilterCheckbox onClick={onClick} isFilter={isFilter} />
      <MoviesCardList
        movies={movies}
        myMovies={myMovies}
        URL={``}
        onMovieLike={onMovieLike}
        onMovieDelete={onMovieDelete}
        isFound={isFound}
      />
    </div>
  );
}

export default SavedMovies;