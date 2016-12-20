import React, { Component } from 'react';
import './NavBar.scss';
import Logo from './Logo/Logo.jsx';

let smoothScroll = require('smoothscroll');

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
    'selected': ''
    };
  };

  ScrollTo = (navBtn) => {
    // console.log(navBtn)
    event.preventDefault();
    var dest = document.querySelector(`.anchor${navBtn.target.id}`);
    smoothScroll(dest, 750);
  }

  render() {
    return (
      <div className="NavBar" id="NavBar">
        <nav>
          <div id="leftNav">
            <li>
              <a href="#">
                <div id="2" className="navGlitch" data-text="Works" onClick={this.ScrollTo}>
                  Works
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div id="3" className="navGlitch" data-text="Resume" onClick={this.ScrollTo}>
                  Resume
                </div>
              </a>
            </li>
          </div>
            <Logo scrollTo={this.ScrollTo} />
          <div id="rightNav">
            <li>
              <a href="#">
                <div id="4" className="navGlitch" data-text="Creds" onClick={this.ScrollTo}>
                  Creds
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div id="5" className="navGlitch" data-text="Connect" onClick={this.ScrollTo}>
                  Connect
                </div>
              </a>
            </li>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
