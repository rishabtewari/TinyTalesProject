import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          
          <Redirect to="/u1/places" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
