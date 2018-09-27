import { GET_APP_INFO, EMPTY, dispatchAction } from '../constants/ActionTypes'
import NetworkManager from '../utils/NetworkManager'
import ApiConfig from '../config/api-config'

const cancelAppInfoError = (error) => ({
  type: `${GET_APP_INFO}_CANCELED`,
  payload: error
})


let source
export function cancelAppInfo() {
  NetworkManager.cancelRequest(source, 'canceled tao thich')
  return { type: EMPTY }
}

export function getAppInfo() {
  source = NetworkManager.sourceCancel()
  return function (dispatch) {
    dispatchAction(dispatch, GET_APP_INFO, null, null)
    NetworkManager.request(ApiConfig.oAuth.login({ username: 'ltranframgia', password: '12345678' }, null, source))
      .then(function (response) {
        dispatchAction(dispatch, GET_APP_INFO, response.data, true)
      })
      .catch(function (error) {
        if (NetworkManager.isCancel(error) === true) {
          dispatch(cancelAppInfoError(error.message))
        } else {
          dispatchAction(dispatch, GET_APP_INFO, error, false)
        }
      });
  }
}
