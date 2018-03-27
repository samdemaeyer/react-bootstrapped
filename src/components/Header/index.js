import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class Header extends Component {
  render() {
    return (
      <ScrollableAnchor id={'section0'}>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                  <a href="#section1" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                </div>
              </div>
              <div className="col-lg-5 my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        <img src="img/demo-screen-1.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="button">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollableAnchor>
    );
  }
}

export default Header;
