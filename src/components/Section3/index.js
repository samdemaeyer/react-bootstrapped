import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className="cta">
        <div className="cta-content">
          <div className="container">
            <h2>Stop waiting.<br />Start building.</h2>
            <a href="#section3" className="btn btn-outline btn-xl js-scroll-trigger">Let&#8217;s Get Started!</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    );
  }
}

export default Header;
