import React from 'react';
import cpplogo from '../assests/icons/cpp.svg';
import frontendlogo from '../assests/icons/frontend.svg';
import mobileLogo from '../assests/icons/develop.svg';
import '../scss/skill.scss';

const Skill = () => (
  <>
    <section className='skills'>
      <div className='box-container'>
        <div className='box'>
          <div className='column'>
            <img src={cpplogo} alt='logo' />
            <h1 className='title'> Competitive Programming </h1>
            <p className='subtitle'>
              I love to challenge myself to code any difficult problem.{' '}
            </p>
            <div className='item'>
              <h2>Language I Speak:</h2>
              <p>CPP, Python, Java, Dart</p>
            </div>
            <div className='item'>
              <h2>Things I know:</h2>
              <p>
                <ul>
                  <li>STL</li>
                  <li>Data Structures</li>
                  <li>Algorithms</li>
                </ul>
              </p>
            </div>
          </div>
          <div className='column'>
            <img src={frontendlogo} alt='logo' />
            <h1 className='title'>Full Stack Web Developer </h1>
            <p className='subtitle'>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <div className='item'>
              <h2>Language I used:</h2>
              <p>HTML, Javascript, CSS, Sass, Less, NodeJs </p>
            </div>
            <div className='item'>
              <h2>Tools And Frameworks:</h2>
              <p>
                <ul>
                  <li>React JS </li>
                  <li>Svelte</li>
                  <li>Sapper</li>
                  <li>ExpressJs</li>
                  <li>MongoDB & Mongoose</li>
                  <li>firebase</li>
                  <li>AWS</li>
                  <li>Bootstrap </li>
                  <li>Redux</li>
                  <li>Github</li>
                  <li>Terminal</li>
                </ul>
              </p>
            </div>
          </div>
          <div className='column'>
            <img src={mobileLogo} alt='logo' />
            <h1 className='title'>Android App Developer </h1>
            <p className='subtitle'>
              Building beautiful mobile app that can solve daily life problems
              in a interactive and easy way
            </p>
            <div className='item'>
              <h2>Skills I gained:</h2>
              <p>React Native, Expo, Flutter, Dart </p>
            </div>
            <div className='item'>
              <h2>Tools And Frameworks:</h2>
              <p>
                <ul>
                  <li>Android Studio </li>
                  <li>Sembast Database </li>
                  <li>Redux</li>
                  <li>Github</li>
                  <li>Terminal</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Skill;
