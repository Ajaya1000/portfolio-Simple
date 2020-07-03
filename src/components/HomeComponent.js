import React, { Component } from 'react'
import avatar from '../assests/avatar.svg'
import footsvg from '../assests/hero.svg'

import '../scss/info.scss'
export default class Home extends Component {
  render() {
    return (
      <>
        <section className='info' id='home'>
            <div className='info-body'>
                <h1>
                    Front-end Developer & Competitive coder
                </h1>
                <h2>
                    I code beautifully and love to solve practical problems.
                </h2>
                <img src={avatar} alt='avatar'/>
            </div>
            < div className = 'info-footer' >
                <img src={footsvg} alt='footer' />
            </div>
        </section>
      </>
    )
  }
}
