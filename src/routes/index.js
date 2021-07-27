import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Calls from '../pages/Calls';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/calculator" exact component={Calculator} />
    <Route path="/suporte" exact component={Calls} />
  </Switch>
);

export default Routes;
