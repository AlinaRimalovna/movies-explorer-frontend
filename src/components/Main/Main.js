import React from 'react';
import Promo from '../Promo/Promo.js'
import AboutProject from '../AboutProject/AboutProject.js'
import Techs from '../Techs/Techs.js'
import AboutMe from '../AboutMe/AboutMe.js'
import Portfolio from '../Portfolio/Portfolio.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

function Main() {
  return (
    <section className="main">
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </section>
  );
}

export default Main;