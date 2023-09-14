import React from 'react';

function Footer() {
  return (
    <section class="footer" >
      <div className="footer__heading">
        <h1 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
      </div>
      <div className="footer__navigation">
        <p class="footer__copyright">© 2023</p>
        <nav class="footer__links">
          <a class="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a class="footer__link" href="https://github.com/AlinaRimalovna" target="_blank" rel="noreferrer">Github</a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;