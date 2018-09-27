export const EMPTY = 'EMPTY';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const CANCELED = 'CANCELED';
export const GET_APP_INFO = 'GET_APP_INFO';
export const GET_USER_INFO = 'GET_USER_INFO';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

// dispatch action (using for request api)
export function dispatchAction(dispatch, type, data, success) {
  let suffix = ''
  if (success === true) {
    suffix = `_${SUCCESS}`
  } else if (success === false) {
    suffix = `_${ERROR}`
  } else if (success === CANCELED) {
    suffix = `_${CANCELED}`
  }

  const type_suffix = `${type}${suffix}`
  const action = (type, data) => ({
    type: type,
    payload: data
  })

  // dispatch
  return dispatch(action(type_suffix, data))
}
