import { entries } from './reducers';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();
const reducer = combineReducers({ app: entries });

const store = createStore(
  connectRouter(history)(reducer),
  compose(applyMiddleware(routerMiddleware(history), thunk)),
);

export { store, history };
