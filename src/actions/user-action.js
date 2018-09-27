import { GET_USER_INFO, EMPTY } from '../constants/ActionTypes'

import NetworkManager from '../utils/NetworkManager'
import ApiConfig from '../config/api-config'


export const getUserInfo = () => ({
    type: GET_USER_INFO,
})

// const requestAppInfo = () => ({
//   type: GET_APP_INFO,
// })

// const receiveAppInfo = (json) => ({
//   type: `${GET_APP_INFO}_FULFILLED`,
//   payload: json
// })

// const receiveAppInfoError = (error) => ({
//   type: `${GET_APP_INFO}_REJECTED`,
//   payload: error
// })

const cancelUserInfoError = (error) => ({
  type: `${GET_USER_INFO}_CANCELED`,
  payload: error
})

let source

export function cancelLogin() {
  NetworkManager.cancelRequest(source, 'canceled tao thich')
  return { type: EMPTY }
}

export function getMyInfo() {
  source = NetworkManager.sourceCancel()
  return function (dispatch) {
    // dispatch(requestAppInfo())
    NetworkManager.request(ApiConfig.oAuth.login({ username: 'ltranframgia', password: '12345678' }, null, source))
      .then(function (response) {
        // dispatch(receiveAppInfo(response.data))
      })
      .catch(function (error) {
        if (NetworkManager.isCancel(error) === true) {
        //   dispatch(cancelAppInfoError(error.message))
        } else {
        //   dispatch(receiveAppInfoError(error))
        }
      });
  }
}
