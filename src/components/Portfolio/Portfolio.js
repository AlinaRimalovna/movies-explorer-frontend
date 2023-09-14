import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__main">
        <h1 className="portfolio__title">Портфолио</h1>
        <div className="portfolio__links">
          <p className="portfolio__project">Статичный сайт</p>
          <a className="portfolio__link" href="https://github.com/AlinaRimalovna/how-to-learn" target="_blank" rel="noreferrer"> </a>
        </div>
        <div className="portfolio__links">
          <p className="portfolio__project">Адаптивный сайт</p>
          <a className="portfolio__link" href="https://github.com/AlinaRimalovna/russian-travel" target="_blank" rel="noreferrer"> </a>
        </div>
        <div className="portfolio__links">
          <p className="portfolio__project">Одностраничное приложение</p>
          <a className="portfolio__link" href="https://alina-mesto.nomoreparties.co/" target="_blank" rel="noreferrer"> </a>
        </div>
      </div>
    </section>

  );
}

export default Portfolio;