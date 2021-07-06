import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const HomePage = lazy(() => import('@pages/home/Home'));

const Routing = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routing;
