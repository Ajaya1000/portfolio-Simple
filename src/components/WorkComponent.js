import React, { Component } from "react";
import "../scss/work.scss";
import homeDecore from "../assests/works/homedecore.png";
import recoms from "../assests/works/recoms.png";
import todo from "../assests/works/todo.png";
import weather from "../assests/works/waether.png";
import covid from "../assests/works/covid.png";
export default class Work extends Component {
  render() {
    return (
      <>
        <section className="work" id="works">
          <h1>My Recent Work</h1>
          <div className="project-menu">
            <div className="project">
              <img src={covid} alt="homeDecore" />
              <div className="caption">
                <p>
                  Covid-19 Tracker<br />(part of flipr Hackathon)
                </p>
                <a className="cv" target="_blank" rel='noopener noreferrer' href="http://3.132.84.112:3000/#/home">
                  Visit Website
                </a>
              </div>
            </div>
            <div className="project">
              <img src={homeDecore} alt="homeDecore" />
              <div className="caption">
                <p>
                  To redefine your house we'll will help you choose appropriate
                  things your home need
                </p>
                <a className="wop" href="#a">
                  Work On Progress
                </a>
              </div>
            </div>
            <div className="project">
              <img src={recoms} alt="recoms" />
              <div className="caption">
                <p>A personal chat bot to help your track your health</p>
                <a className="wop" href="#a">
                  Work On Progress
                </a>
              </div>
            </div>
            <div className="project">
              <img src={todo} alt="todo" />
              <div className="caption">
                <p>To help you track your daily routine</p>
                <a className="wop" href="#a">
                  Work on Progress
                </a>
              </div>
            </div>
            <div className="project">
              <img src={weather} alt="weather" />
              <div className="caption">
                <p>Get weather of your city.</p>
                < a className = "cv"
                href = "https://ajaya1000.github.io/WeatherApp/" target="_blank" rel='noopener noreferrer' >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
