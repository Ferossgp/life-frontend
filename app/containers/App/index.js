/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CountriesPage from 'containers/Countries/Loadable';
import CountryPage from 'containers/Country/Loadable';
import ProfilePage from 'containers/Profile/index';
import ProfileGraphsPage from 'containers/LifeExpectancy';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CountriesPage} />
        <Route path="/countries" component={CountriesPage} />
        <Route path="/country/:country_id" component={CountryPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/expectancy" component={ProfileGraphsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
