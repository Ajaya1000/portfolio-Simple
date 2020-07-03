import React, { Component } from 'react'
import '../scss/header.scss'
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-items">
            <a className="navbar-item" href="#home">
              Home
            </a>
            <a className="navbar-item" href="#works">
              {" "}
              Work{" "}
            </a>
            <a className="navbar-item" href="#contact">
              {" "}
              Contact{" "}
            </a>
          </div>
          <div className="navbar-items">
            <a
              className="navbar-item"
              href="https://www.facebook.com/profile.php?id=100010825184962"
            >
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a className="navbar-item" href="https://twitter.com/MatiAjay">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
            <a className="navbar-item" href="https://github.com/Ajaya1000/">
              <i className="fa fa-github fa-lg"></i>
            </a>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/ajaya-mati-252a85184/"
            >
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
          </div>
        </nav>
      </>
    );
  }
}
