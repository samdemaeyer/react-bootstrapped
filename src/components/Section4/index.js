import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  render() {
    return (
      <ScrollableAnchor id={'section3'}>
        <section className="contact bg-primary" id="contact">
          <div className="container">
            <h2>
              We <FontAwesome name='heart' /> new friends!</h2>
            <ul className="list-inline list-social">
              <li className="list-inline-item social-twitter">
                <a>
                  <FontAwesome name='twitter' />
                </a>
              </li>
              <li className="list-inline-item social-facebook">
                <a>
                  <FontAwesome name='facebook' />
                </a>
              </li>
              <li className="list-inline-item social-google-plus">
                <a>
                  <FontAwesome name='google-plus' />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default Header;
