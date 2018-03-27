import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <p>&copy; Your Website 2018. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a>Privacy</a>
            </li>
            <li className="list-inline-item">
              <a>Terms</a>
            </li>
            <li className="list-inline-item">
              <a>FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }

}

export default Header;
