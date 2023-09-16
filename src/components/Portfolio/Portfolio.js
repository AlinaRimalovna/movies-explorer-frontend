import React from 'react';
import link from '../../images/link.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__main">
        <h1 className="portfolio__title">Портфолио</h1>
        {/* <div className="portfolio__links">
          <p className="portfolio__project">Статичный сайт</p> */}
          <a className="portfolio__links" href="https://github.com/AlinaRimalovna/how-to-learn" target="_blank" rel="noreferrer"> 
          <p className="portfolio__project">Статичный сайт</p>
          <img className="portfolio__link" src={link} alt="ссылка на сайт" />
          </a>
        {/* </div> */}
        {/* <div className="portfolio__links">
          <p className="portfolio__project">Адаптивный сайт</p> */}
          <a className="portfolio__links" href="https://github.com/AlinaRimalovna/russian-travel" target="_blank" rel="noreferrer"> 
          <p className="portfolio__project">Адаптивный сайт</p>
          <img className="portfolio__link" src={link} alt="ссылка на сайт" />
          </a>
        {/* </div>
        <div className="portfolio__links"> */}
          <a className="portfolio__links" href="https://alina-mesto.nomoreparties.co/" target="_blank" rel="noreferrer">
          <p className="portfolio__project">Одностраничное приложение</p>
          <img className="portfolio__link" src={link} alt="ссылка на сайт" />
             </a>
        {/* </div> */}
      </div>
    </section>

  );
}

export default Portfolio;