import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Test from './Test.jsx';
import App from './App.jsx';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/testeroo" component={Test} />
  </Router>
)

export default Routes;
