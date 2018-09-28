import { combineReducers } from 'redux'
import appReducer from './app-reducer'
import userReducer from './user-reducer'
import reachabilityReducer from '../utils/reachability/reachability-reducer'

const reducers = combineReducers({
  appInfo: appReducer,
  user: userReducer,
  netInfo: reachabilityReducer,
})

const rootReducers = (state, action) => {
  console.log('rootReducers')
  console.log(state)
  console.log(action)
  return reducers(state, action);
};

export default rootReducers;