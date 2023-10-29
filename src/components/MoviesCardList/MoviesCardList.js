import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js'
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, myMovies, URL, onMovieDelete, onMovieLike, cardViewz, isFound, handleMore, isMore }) {
  const location = useLocation();
  const [cardView, setCardView] = useState(cardViewz);

  useEffect(() => {
    setCardView(cardViewz)
  }, [movies])

  function handle() {
    handleMore(cardView);
    setCardView(handleMore)
  }

  return (
    <section className="cards">
      <div className="cards__list">
        {
          movies.slice(0, cardView).map((movie) => (
            <MoviesCard key={movie._id}
              movie={movie}
              myMovies={myMovies}
              image={`${URL}${movie.image.url || movie.image}`}
              nameRU={movie.nameRU}
              movieId={movie.movieId}
              duration={movie.duration}
              trailer={movie.trailerLink}
              onMovieLike={onMovieLike}
              onMovieDelete={onMovieDelete}
            />))
        }

      </div>
      {isFound && <p className="cards__notFound">Ничего не найдено</p>}
      {location.pathname === "/movies" && isMore && <button className="cards__button" onClick={handle}>Еще</button>}
    </section>
  );
}

export default MoviesCardList;