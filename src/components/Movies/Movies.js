import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function Movies({
  handleSubmit,
  loggedIn,
  movies,
  myMovies,
  onMovieDelete,
  onMovieLike,
  onClick,
  cardView,
  isFound,
  handleMore,
  isMore,
  isFilter,
  searchName,
  handleSearch,

}) {
  return (
    <div className="movies">
      <SearchForm
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        searchName={searchName}
      />
      <FilterCheckbox onClick={onClick} isFilter={isFilter} />
      <MoviesCardList
        movies={movies}
        myMovies={myMovies}
        URL={`https://api.nomoreparties.co/`}
        onMovieLike={onMovieLike}
        onMovieDelete={onMovieDelete}
        cardViewz={cardView}
        isFound={isFound}
        handleMore={handleMore}
        isMore={isMore}
      />
    </div>
  );
}

export default Movies;
