import React from 'react';
import Heading from '../Heading/Heading.js'
import foto from '../../images/foto.png';

function AboutMe() {
  return (
    <section className="student">
      <Heading
        name="Студент">
      </Heading>
      <div className="student__about">
        <div className="student__main">
          <h1 className="student__name">Алина</h1>
          <p className="student__profession">Геофизик, 33 года</p>
          <p className="student__info">Родом из маленького городка в Башкирии, а сейчас живу в Ижевске. Имею высшее геофизическое образование, но решила попробовать что-то новенькое и пошла на курс Яндекс Практикума.Пока нравится, временами даже очень, не смотря на то, что бывает и очень сложно.</p>
          <a className="student__link" href="https://github.com/AlinaRimalovna" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="student__foto" src={foto} alt="фото студента" />
      </div>
    </section>

  );
}

export default AboutMe;