import React from 'react';
import movie from '../../images/movie.svg';
import { useLocation } from 'react-router-dom';

function MoviesCard({ link, name, handleDeleteClick, handleLikeClick, duration, handleCardClick }) {
  const location = useLocation();
  // const isOwn = movie.owner === id;
  // const isOwn = movie.owner === currentUser._id;
  //  const isLiked = movie.likes.some(i => i === currentUser._id);
  const isLiked = false;
  const cardLikeButtonClassName = (
    `movie__like ${isLiked && 'movie__like_active'}`
  );
  return (
    <article className="movie">
      <img className="movie__image" src={movie} alt={name} onClick={handleCardClick} />
      <div className="movie__info">
        <h2 className="movie__title">33 слова о дизайне</h2>
        {location.pathname === "/saved-movies" && <button className="movie__delete" type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>}
        {location.pathname === "/movies" && <button className={cardLikeButtonClassName} type="button" aria-label="Удалить" onClick={handleDeleteClick}>
        </button>}
        {/* {isOwn ? <button className="movie__delete" type="button" aria-label="Удалить" onClick={handleDeleteClick}></button> : <button className="movie__like" type="button" aria-label="Добавить" onClick={handleLikeClick}></button>} */}
      </div>
      <p className="movie__duration">1ч42м</p>
    </article>
  );
}

export default MoviesCard;