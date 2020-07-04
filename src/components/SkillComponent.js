import React, { Component } from 'react';
import cpplogo from '../assests/icons/cpp.svg';
import frontendlogo from '../assests/icons/frontend.svg';
import '../scss/skill.scss'
export default class Skill extends Component {
  render() {
    return (
      <>
        <section className='skills'>
            <div className='box-container'>
                <div className='box'>
                    <div className = 'column' >
                        <img src={cpplogo} alt='logo'/>
                        <h1 className='title'> Competitive Programming </h1>
                        <p className='subtitle'>I love to challenge myself to code any difficult problem. </p>
                        <div className='item'>
                            <h2>Language I Speak:</h2>
                            <p>CPP,Python,Java</p>
                        </div>
                        < div className = 'item'>
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
                    < div className = 'column' >
                         < img src = {frontendlogo} alt = 'logo' />
                         < h1 className = 'title' >Front-end Developer </h1> 
                         < p className = 'subtitle' > I like to code things from scratch, and enjoy bringing ideas to life in the browser. </p> 
                             <div className = 'item' >
                                    <h2 >Language I used:</h2>
                                    <p >HTML, Javascript, CSS, Sass, Less </p>
                             </div> <div className = 'item' >
                                    <h2 >Tools And Frameworks:</h2> 
                                    <p >
                                        <ul>
                                            < li >React JS </li>
                                            < li >Bootstrap </li>
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
    )
  }
}
