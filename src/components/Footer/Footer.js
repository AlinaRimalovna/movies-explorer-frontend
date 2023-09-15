import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  return (
    <section class={`footer ${location.pathname === "/profile" && 'footer_type_hidden'} ${location.pathname === "/sign-in" && 'footer_type_hidden'} ${location.pathname === "/sign-up" && 'footer_type_hidden'} ${location.pathname === "/404" && 'footer_type_hidden'}`}>
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