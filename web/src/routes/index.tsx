import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CriarCliente from '../pages/CriarCliente';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/criar-cliente" component={CriarCliente} />
  </Switch>
);

export default Routes;
