import React from 'react';
import ReactDOM from 'react-dom';
import { store, history } from './store';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { routes } from './routes';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
