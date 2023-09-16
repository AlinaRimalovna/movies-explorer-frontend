import React from 'react';
import Heading from '../Heading/Heading.js'

function Techs() {
  return (
    <section className="techs">
      <Heading
        name="Технологии">
      </Heading>
      <div className="techs__main">
        <h1 className="techs__title">7 технологий</h1>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__box">
          <div className="techs__card">
            <p className="techs__text">HTML</p>
          </div>
          <div className="techs__card">
            <p className="techs__text">CSS</p>
          </div>
          <div className="techs__card">
            <p className="techs__text">JS</p>
          </div>
          <div className="techs__card">
            <p className="techs__text">React</p>
          </div>
          <div className="techs__card">
            <p className="techs__text">Git</p>
          </div>
          <div className="techs__card">
            <p className="techs__text">Express.js</p>
          </div>
          <div className="techs__card">
            <p className="techs__text">mongoDB</p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Techs;