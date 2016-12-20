import React, { Component } from 'react';
import Loader from './Loader/Loader.jsx';
import NavBar from './NavBar/NavBar.jsx';
import TopFold from './TopFold/TopFold.jsx';
import FoldTwo from './FoldTwo/FoldTwo.jsx';
import FoldThree from './FoldThree/FoldThree.jsx';
import FoldFour from './FoldFour/FoldFour.jsx';
import FoldFive from './FoldFive/FoldFive.jsx';
import FoldSix from './FoldSix/FoldSix.jsx';
import BlogApp from './BlogApp/BlogApp.jsx';

import './App.scss';
import './Responsive.scss';

import classnames from 'classnames';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    'mode': '0',    // mode 0 is portfolio, mode 1 is photo blog
    'loader': '0'    // mode 0 is loader, mode 1 is no loader
    };
    this.modeChanger = this.modeChanger.bind(this);
  };

  modeChanger() {
    if (this.state.mode === "1") {
      this.setState({mode: '0', loader:'1'})
    } else {
      this.setState({mode: '1', loader: '0'})
    }
  }

  render() {
    const { className, ...props } = this.props;
    if (this.state.mode === "1") {
      return (
        <div className="App" id="PhotoBlog">
        <BlogApp modeChanger={this.modeChanger} />
        </div>
      )
    } else if (this.state.loader === "0") {
        return (
          <div className={classnames('App', className)} {...props}>
            <Loader />
            <NavBar />
            <div id="headTri"></div>
            <TopFold />
            <FoldTwo />
            <FoldThree />
            <FoldFour />
            <FoldFive />
            <FoldSix modeChanger={this.modeChanger} />
          </div>
        )
    } else {
      return (
        <div className={classnames('App', className)} {...props}>
          <NavBar />
          <TopFold />
          <FoldTwo />
          <FoldThree />
          <FoldFour />
          <FoldFive />
          <FoldSix modeChanger={this.modeChanger} />
        </div>
      )
    }
  }
}

export default App;
