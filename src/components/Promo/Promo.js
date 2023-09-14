import React from 'react';
// import MoviesCard from '../MoviesCard/MoviesCard.js'
import promo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__box">
        <div className="promo__heading">
          <h1 className="promo__title">Учебный проект студента факультета <nobr>Веб-разработки.</nobr></h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className="promo__logo" src={promo} alt="логотип сайта" />
      </div>
      <div className="promo__link">
        <a className="promo__button" href="#about">Узнать больше</a>
      </div>
    </section>
  );
}

export default Promo;