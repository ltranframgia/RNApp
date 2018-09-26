import { GET_APP_INFO, EMPTY } from '../constants/ActionTypes'
import NetworkManager from '../config/NetworkManager'

const requestAppInfo = () => ({
  type: GET_APP_INFO,
})

const receiveAppInfo = (json) => ({
  type: `${GET_APP_INFO}_FULFILLED`,
  payload: json
})

const receiveAppInfoError = (error) => ({
  type: `${GET_APP_INFO}_REJECTED`,
  payload: error
})

const cancelAppInfoError = (error) => ({
  type: `${GET_APP_INFO}_CANCELED`,
  payload: error
})


export function cancelAppInfo() {
  NetworkManager.cancelRequest(source, 'canceled tao thich')
  return { type: EMPTY }
}

const configRequestInfo = (data, parameter) => {
  return {
    url: '/r/frontend.json',
    method: 'get',
    data,
    parameter,
    cancelToken: source.token,
  }
}

let source
export function getAppInfo() {
  source = NetworkManager.sourceCancel()
  return function (dispatch) {
    dispatch(requestAppInfo())

    NetworkManager.request(configRequestInfo())
      .then(function (response) {
        // console.log(response.data);
        console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
        dispatch(receiveAppInfo(response.data))
      })
      .catch(function (error) {
        console.log(error);
        if (NetworkManager.isCancel(error) === true) {
          dispatch(cancelAppInfoError(error.message))
        } else {
          dispatch(receiveAppInfoError(error))
        }
      });
  }
}
