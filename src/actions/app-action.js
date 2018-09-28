import { GET_APP_INFO, dispatchAction } from '../constants/ActionTypes'
import NetworkManager from '../utils/NetworkManager'
import ApiConfig from '../config/api-config'

export function getAppInfo() {
  return function (dispatch) {
    dispatchAction(dispatch, GET_APP_INFO, null, null)
    NetworkManager.request(ApiConfig.app.info())
      .then(function (response) {
        dispatchAction(dispatch, GET_APP_INFO, response.data, true)
      })
      .catch(function (error) {
        dispatchAction(dispatch, GET_APP_INFO, error, false)
      });
  }
}
