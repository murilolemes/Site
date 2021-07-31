import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import FeedFacebook from '../pages/Facebook';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/calculator" component={Calculator} />
    <Route path="/FeedFacebook" component={FeedFacebook} />
  </Switch>
);

export default Routes;
