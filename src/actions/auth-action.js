import { LOGIN, LOGOUT, dispatchAction } from '../constants/ActionTypes'
import NetworkManager from '../utils/NetworkManager'
import ApiConfig from '../config/api-config'

export function login(data) {

  return function (dispatch) {
    dispatchAction(dispatch, LOGIN)
    NetworkManager.request(ApiConfig.oAuth.login(data))
      .then(function (response) {
        dispatchAction(dispatch, LOGIN, response.data, true)
      })
      .catch(function (error) {
        dispatchAction(dispatch, LOGIN, error, false)
      });
  }
}

export function logout() {

  return function (dispatch) {
    dispatchAction(dispatch, LOGOUT)
    NetworkManager.request(ApiConfig.oAuth.logout())
      .then(function (response) {
        dispatchAction(dispatch, LOGOUT, response.data, true)
      })
      .catch(function (error) {
        dispatchAction(dispatch, LOGOUT, error, false)
      });
  }
}