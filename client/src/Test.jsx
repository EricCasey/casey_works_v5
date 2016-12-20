// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';


export default class Test extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    console.log()
    return (
      <div className={classnames('Test', className)} {...props}>
        <h1>
          "howdy"
        </h1>
      </div>
    );
  }
}
