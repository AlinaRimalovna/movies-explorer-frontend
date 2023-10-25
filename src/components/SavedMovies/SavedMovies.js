import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'
import SearchForm from '../SearchForm/SearchForm.js'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'

function SavedMovies({ handleSubmit, movies, myMovies, onMovieDelete, onMovieLike, onClick, isFound }) {
  return (
    <div className="savedMovies">
      <SearchForm handleSubmit={handleSubmit} />
      <FilterCheckbox onClick={onClick} />
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