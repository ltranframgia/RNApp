import { GET_APP_INFO, SUCCESS, ERROR } from '../constants/ActionTypes'

const initialState = {
};

const appReducer = (state = initialState, action) => {
  let appInfo = getAppInfo(state, action)
  if (appInfo) {
    return appInfo
  }

  appInfo = deleteAppInfo(state, action)
  if (appInfo) {
    return appInfo
  }
  return state
}

function getAppInfo(state, action) {
  switch (action.type) {
    case GET_APP_INFO:
      return state
    case `${GET_APP_INFO}`:
      return {
        ...state,
        responseError: 'error'
      };
    case `${GET_APP_INFO}_${SUCCESS}`:
      return {
        ...state,
        ...action.payload
      };
    case `${GET_APP_INFO}_${ERROR}`:
      return {
        ...state,
        responseError: action.payload
      };
    default:
      return null
  }
}


function deleteAppInfo(state, action) {
  switch (action.type) {
    case GET_APP_INFO:
      return state
    case `${GET_APP_INFO}_PENDING`:
      return {
        ...state,
        responseError: 'error'
      };
    case `${GET_APP_INFO}_FULFILLED`:
      return {
        ...state,
        ...action.payload
      };
    case `${GET_APP_INFO}_REJECTED`:
      return {
        ...state,
        responseError: action.payload
      };
    default:
      return null
  }
}

export default appReducer
