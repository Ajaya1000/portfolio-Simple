import React, { Component } from 'react';
import '../scss/work.scss';
import homeDecore from '../assests/works/homedecore.png';
import recoms from '../assests/works/recoms.png';
import todo from '../assests/works/todo.png';
import weather from '../assests/works/waether.png';
import covid from '../assests/works/covid.png';
import Project from './ProjectComponent';
export default class Work extends Component {
  render() {
    const workList = [
      {
        img: covid,
        alt: 'covid',
        desc: 'Covid-19 Tracker \n (part of flipr Hackathon)',
        isWorkOnProgress: false,
        link: 'http://3.132.84.112:3000/#/home',
      },
      {
        img: homeDecore,
        alt: 'homeDecore',
        desc: "To redefine your house we'll will help you choose appropriate things your home need",
        isWorkOnProgress: true,
        link: '#works',
      },
      {
        img: recoms,
        alt: 'recoms',
        desc: 'A personal chat bot to help you track your health',
        isWorkOnProgress: true,
        link: '#works',
      },
      {
        img: todo,
        alt: 'todo',
        desc: 'To help you track your daily routine',
        isWorkOnProgress: true,
        link: '#works',
      },
      {
        img: weather,
        alt: 'weather',
        desc: 'Get weather of your city',
        isWorkOnProgress: false,
        link: 'https://ajaya1000.github.io/WeatherApp/',
      },
    ];

    return (
      <>
        <section className='work' id='works'>
          <h1>My Recent Work</h1>
          <div className='project-menu'>
            {workList.map((item) => (
              <Project key={item.alt} {...item} />
            ))}
          </div>
        </section>
      </>
    );
  }
}
