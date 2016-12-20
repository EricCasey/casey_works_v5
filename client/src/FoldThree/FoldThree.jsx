import React, { Component } from 'react';
import './FoldThree.scss';
require('bootstrap')

class FoldThree extends Component {
  render() {
    return (
      <div className="FoldThree" id="FoldThree">
      <div className="content">
        <div className="anchor3"></div>
        <h3><b><a href="http://resume.casey.works">Download CV</a></b></h3>
      </div>
    </div>
    );
  }
}

export default FoldThree;
