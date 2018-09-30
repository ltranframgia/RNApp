import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'

// Store
const store = createStore(reducers, applyMiddleware(
  thunkMiddleware
  // loggerMiddleware 
));

const dispatchAction = (action) => {
  store.dispatch(action)
}

const getStore = () => {
  return store
}

export { getStore, dispatchAction };
