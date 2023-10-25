import React from 'react';
// import movie from '../../images/movie.svg';
import { useLocation } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function MoviesCard({ movie, myMovies, image, movieId, nameRU, duration, trailer, onMovieDelete, onMovieLike }) {
  // const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  // const isOwn = movie.owner === id;
  // const isLiked = movie.owner === currentUser.id;
  const id = {movieId}
   const isLiked = myMovies.some((i) => i.nameRU === nameRU);
  const cardLikeButtonClassName = (
    `movie__like ${isLiked && 'movie__like_active'}`
  );


  function handleDeleteClick() {
    onMovieDelete(movie._id);
    console.log(movie);
  }

  function handleLikeClick() {
    onMovieLike(movie);
    console.log(isLiked);
  }

  return (
    <article className="movie">
      <a className="movie__link" href={trailer} target="_blank" rel="noreferrer">
      <img className="movie__image" src={image} alt={nameRU} />
      </a>
      <div className="movie__info">
        <h2 className="movie__title">{nameRU}</h2>
        {location.pathname === "/saved-movies" && <button className="movie__delete" type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>}
        {location.pathname === "/movies" && <button className={cardLikeButtonClassName} type="button" aria-label="Добавить" onClick={handleLikeClick}>
        </button>}
        {/* {isOwn ? <button className="movie__delete" type="button" aria-label="Удалить" onClick={handleDeleteClick}></button> : <button className="movie__like" type="button" aria-label="Добавить" onClick={handleLikeClick}></button>} */}
      </div>
      <p className="movie__duration">{Math.trunc(duration/60)}ч {duration % 60}м</p>
    </article>
  );
}

export default MoviesCard;