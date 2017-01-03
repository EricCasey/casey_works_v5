import React, { Component } from 'react';
import './TopFold.scss';

class TopFold extends Component {
  render() {
    return (
      <div className="TopFold" id="TopFold">
      <div className="anchor1"></div>
        <div className="content">
          <h3>Hi there, welcome to my website.</h3>
          <h3>On mobile, this URL directs you to my <a href="http://resume.casey.works">resmue</a>.</h3>
          <h3>As of January 2017 this site is a work in progress/sandbox.</h3>
          <h3>Thanks for visting.</h3>
          <h3>-Eric</h3>
        </div>
      </div>
    );
  }
}

export default TopFold;
