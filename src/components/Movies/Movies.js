import React from 'react';
import Header from '../Header/Header.js'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'
import SearchForm from '../SearchForm/SearchForm.js'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'
import Footer from '../Footer/Footer.js'

function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;