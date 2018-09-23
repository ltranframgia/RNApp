import { combineReducers } from 'redux'
import appInfo from './app'
import user from './user'

const reducers = combineReducers({
  appInfo: appInfo,
  user: user
})

const rootReducers = (state, action) => {
  console.log('rootReducers')
  console.log(state)
  console.log(action)
  return reducers(state, action);
};

export default rootReducers;