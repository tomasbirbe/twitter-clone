import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout/Layout';
import Feed from './Pages/Feed';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default App;
