import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js'
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const location = useLocation();
  return (
    <section className="cards">
      <div className="cards__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        {/* <MoviesCard /> */}
      </div>
      {location.pathname === "/movies" && <button className="cards__button">Еще</button>}
    </section>
  );
}

export default MoviesCardList;