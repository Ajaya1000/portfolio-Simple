import React, { Component } from 'react'
import Header from './HeaderComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import '../scss/main.scss'
import Skill from './SkillComponent'
export default class Main extends Component {
  render() {
    return (
      <>
        <Header/>
        <div className='main-content'>
          < Home / >
           <About / >
            <Skill/>
        </div>
      </>
    )
  }
}
