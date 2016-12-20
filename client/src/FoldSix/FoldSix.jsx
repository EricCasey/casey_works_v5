import React, { Component } from 'react';
import './FoldSix.scss';

class FoldSix extends Component {
  render() {
    return (
      <div className="FoldSix" id="FoldSix" onClick={this.props.modeChanger} >
        <div className="content">
          <h3>Check out my photo-blog</h3>
        </div>
      </div>
    );
  }
}

export default FoldSix;
