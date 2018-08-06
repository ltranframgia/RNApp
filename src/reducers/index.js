import { combineReducers } from 'redux'
import addCounter from './launchReducer'

const reducers = combineReducers({
  Counter: addCounter
})

export default reducers;