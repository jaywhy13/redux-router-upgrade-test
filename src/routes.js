import React from 'react';
import App from './App';
import NewEntry from './NewEntry';
import EntryDetail from './EntryDetail';
import { Route } from 'react-router';

const routes = (
  <Route path="/" component={App}>
    <Route path="/new-entry" component={NewEntry} />
    <Route path="/entry/:id" component={EntryDetail} />
  </Route>
);

export { routes };
