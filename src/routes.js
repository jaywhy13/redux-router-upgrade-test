import React from 'react';
import App from './App';
import NewEntry from './NewEntry';
import EntryDetail from './EntryDetail';
import { Route, Switch } from 'react-router';

const routes = (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/new-entry" component={NewEntry} />
    <Route path="/entry/:id" component={EntryDetail} />
  </Switch>
);

export { routes };
