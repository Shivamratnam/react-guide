import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Persons from './containers/Persons/Persons';
import Homepage from './containers/Homepage/Homepage';
import FormGenerator from './containers/FormGenerator/FormGenerator';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path='/persons' component={Persons} />
          <Route path='/form-generator' component={FormGenerator} />
          <Route path='/' exact component={Homepage}/>
          <Redirect to='/' />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
