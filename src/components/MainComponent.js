import React from 'react';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Skill from './SkillComponent';
import Work from './WorkComponent';
import Footer from './FooterComponent';

import '../scss/main.scss';
const Main = () => (
  <>
    <Header />
    <div className='main-content'>
      <Home />
      <About />
      <Skill />
      <Work />
      <Footer />
    </div>
  </>
);
export default Main;
