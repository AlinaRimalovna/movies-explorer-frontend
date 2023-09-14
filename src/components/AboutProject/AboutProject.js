import React from 'react';
import Heading from '../Heading/Heading.js'

function AboutProject() {
  return (
    <section className="about" id="about">
      <Heading
        name="О проекте">
      </Heading>
      <div className="about__info">
        <article className="about__table">
          <h2 className="about__heading">Дипломный проект включал 5 этапов</h2>
          <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="about__table">
          <h2 className="about__heading">На выполнение диплома ушло 5 недель</h2>
          <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about__duration">
        <div className="about__backend">
          <p className="about__duration-text">1 неделя</p>
        </div>
        <div className="about__frontend">
          <p className="about__duration-text">4 недели</p>
        </div>
      </div>
      <div className="about__caption">
        <div className="about__caption_backend">
          <p className="about__caption-text">Back-end</p>
        </div>
        <div className="about__caption_frontend">
          <p className="about__caption-text">Front-end</p>
        </div>
      </div>
    </section>

  );
}

export default AboutProject;