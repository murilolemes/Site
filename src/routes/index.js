import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Calculator from '../pages/Calculator';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/calculator" exact component={Calculator} />
  </Switch>
);

export default Routes;
