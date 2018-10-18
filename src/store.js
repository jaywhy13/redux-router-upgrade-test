import { entries } from './reducers';
import { routerStateReducer, reduxReactRouter } from 'redux-router';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createHistory } from 'history';
import thunk from 'redux-thunk';
import { routes } from './routes';

const reducer = combineReducers({ app: entries, router: routerStateReducer });

const store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    routes,
    createHistory,
  }),
)(createStore)(reducer);

export { store };
