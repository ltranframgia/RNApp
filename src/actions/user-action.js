import { GET_USER_INFO, CANCELED, EMPTY, dispatchAction } from '../constants/ActionTypes'

import NetworkManager from '../utils/NetworkManager'
import ApiConfig from '../config/api-config'


const cancelUserInfoError = (error) => ({
  type: `${GET_USER_INFO}_CANCELED`,
  payload: error
})

let source
export function cancelMyInfo() {
  NetworkManager.cancelRequest(source, 'canceled tao thich')
  return { type: EMPTY }
}

export function getMyInfo() {
  source = NetworkManager.sourceCancel()
  return function (dispatch) {
    dispatchAction(dispatch, GET_USER_INFO)
    NetworkManager.request(ApiConfig.users.me(source))
      .then(function (response) {
        dispatchAction(dispatch, GET_USER_INFO, response.data, true)
      })
      .catch(function (error) {
        if (NetworkManager.isCancel(error) === true) {
          dispatchAction(dispatch, GET_USER_INFO, error, CANCELED)
        } else {
          dispatchAction(dispatch, GET_USER_INFO, error, false)
        }
      });
  }
}

let sourceUser
export function cancelUserInfo() {
  NetworkManager.cancelRequest(sourceUser, 'canceled tao thich')
  return { type: EMPTY }
}

export function getUserInfo(id) {
  sourceUser = NetworkManager.sourceCancel()
  return function (dispatch) {
    dispatchAction(dispatch, GET_USER_INFO)
    NetworkManager.request(ApiConfig.user.user({ id }, sourceUser))
      .then(function (response) {
        dispatchAction(dispatch, GET_USER_INFO, response.data, true)
      })
      .catch(function (error) {
        if (NetworkManager.isCancel(error) === true) {
          dispatchAction(dispatch, GET_USER_INFO, error, CANCELED)
        } else {
          dispatchAction(dispatch, GET_USER_INFO, error, false)
        }
      });
  }
}
