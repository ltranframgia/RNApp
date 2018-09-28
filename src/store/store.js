import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'

// Store
const store = createStore(reducers, applyMiddleware(
  thunkMiddleware
  // loggerMiddleware 
));

export default store;
