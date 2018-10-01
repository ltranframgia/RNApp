import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'

// Store
const configureStore = (reducers) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(
      thunkMiddleware
    ),
  );
  return createStore(reducers, enhancer);
};

const store = configureStore(reducers)

const dispatchAction = (action) => {
  store.dispatch(action)
}

const getStore = () => {
  return store
}

export { getStore, dispatchAction };
