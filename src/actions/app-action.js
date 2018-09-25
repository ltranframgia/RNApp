import { GET_APP_INFO } from '../constants/ActionTypes'
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

export function getAppInfo() {
    return function (dispatch) {

        dispatch(requestAppInfo())

        return NetworkManager.request('get', 'https://www.reddit.com/r/frontend.json')
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                return dispatch(receiveAppInfo(response.data))
            })
            .catch(function (error) {
                console.log(error);
                dispatch(receiveAppInfoError(error))
            });
    }
}
