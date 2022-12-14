import React from 'react';

import '../scss/footer.scss';

const Footer = () => (
  <>
    <section className="contact" id="contact">
      <h1>Living, learning, & leveling up one day at a time.</h1>
      <div className="social-links">
        <a
          className="navbar-item"
          href="https://www.facebook.com/profile.php?id=100010825184962"
        >
          <i className="fa fa-facebook fa-lg"> </i>{' '}
        </a>
        <a className="navbar-item" href="https://twitter.com/MatiAjay">
          <i className="fa fa-twitter fa-lg"> </i>{' '}
        </a>{' '}
        <a className="navbar-item" href="https://github.com/Ajaya1000/">
          <i className="fa fa-github fa-lg"> </i>{' '}
        </a>{' '}
        <a
          className="navbar-item"
          href="https://www.linkedin.com/in/ajaya-mati-252a85184/"
        >
          <i className="fa fa-linkedin fa-lg"> </i>{' '}
        </a>
      </div>
    </section>
  </>
);
export default Footer;
