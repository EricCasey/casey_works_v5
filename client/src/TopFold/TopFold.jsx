import React, { Component } from 'react';
import './TopFold.scss';

class TopFold extends Component {
  render() {
    return (
      <div className="TopFold" id="TopFold">
      <div className="anchor1"></div>
        <div className="content">
          <h3>Hi there, welcome to my website.</h3>
          <h3>On mobile, this URL directs you to my <a href="http://resume.casey.works">CV</a>.</h3>
          <h3>Heroku-Node-ReactJS-based site - WIP est. Nov 2016</h3>
          <h3>Thanks for the session. No Bounce SVP.</h3>
          <h3>Eric || u/Casey_Works</h3>
        </div>
      </div>
    );
  }
}

export default TopFold;
