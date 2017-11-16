import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';

// Containers
import Full from './containers/Full/'

import Dashboard from './views/Dashboard/'

export default (
  <Router routes={routes}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard " component={Dashboard}/>
    </Route>
  </Router>
);


ReactDOM.render(
    <Router routes={routes} history={hashHistory} />, document.getElementById('root')
);
