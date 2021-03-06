import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Finances from '../pages/Finances';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/calculator" component={Calculator} />
    <Route path="/finances" component={Finances} />
  </Switch>
);

export default Routes;
