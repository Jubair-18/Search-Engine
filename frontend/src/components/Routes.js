import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
    </Switch>
  </div>

);