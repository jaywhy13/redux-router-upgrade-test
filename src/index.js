import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { ReduxRouter } from 'redux-router';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Root />
    </ReduxRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
