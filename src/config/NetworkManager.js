import axios from 'axios';
import { retryHandler } from './OauthHandler.js'

const HeaderKey = {
  ContentType: 'Content-Type',
  Authorization: 'Authorization',
  Accept: 'Accept'
}

const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 30000;
axiosInstance.defaults.baseURL = 'https://thl.herokuapp.com/api/v1';
// configHeaderAuthorization('accessToken')

function configHeaderAuthorization(accessToken) {
  if (accessToken) {
    axiosInstance.defaults.headers.common[HeaderKey.Authorization] = 'Bearer ' + accessToken;
  } else {
    axiosInstance.defaults.headers.common[HeaderKey.Authorization] = null;
  }
}

let usingRetrier = false
axiosInstance.interceptors.response.use(null, function (error) {

  if (usingRetrier) {
    return retryHandler(error)
  }

  return Promise.reject(error)
});

const CancelToken = axios.CancelToken;
const sourceCancel = () => {
  return CancelToken.source();
}

const isCancel = (error) => {
  return axios.isCancel(error)
}

const request = (config) => {
  console.log('request ====================== ', config)
  usingRetrier = true
  return axiosInstance({
    method: config.method,
    url: config.url,
    data: config.data,
    params: config.params,
    cancelToken: config.cancelToken
  });
}

const cancelRequest = (source, message) => {
  if (source) {
    source.cancel(message)
  }
}

export default { request, cancelRequest, sourceCancel, isCancel, configHeaderAuthorization }
