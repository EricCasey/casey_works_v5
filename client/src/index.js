import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from 'react-router';
import App from './App';
import './index.css';

import Routes from './routes';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
