import axios from 'axios';

const HeaderKey = {
  ContentType: 'Content-Type',
  Authorization: 'Authorization',
  Accept: 'Accept'
}

const baseURL = 'https://thl.herokuapp.com/api/v1'
const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 30000;
// configHeaderAuthorization('accessToken')
configHeaderBaseUrl(baseURL)

function configHeaderAuthorization(accessToken) {
  if (accessToken) {
    axiosInstance.defaults.headers.common[HeaderKey.Authorization] = 'Bearer ' + accessToken;
  } else {
    axiosInstance.defaults.headers.common[HeaderKey.Authorization] = null;
  }
}

function configHeaderBaseUrl(baseURL) {
  axiosInstance.defaults.baseURL = baseURL;
}

let usingRetrier = false
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log('config')
  // console.log(config)
  return config;
}, null);


axiosInstance.interceptors.response.use(null, function (error) {

  if (usingRetrier) {
    const Handler = require('./OauthHandler').default
    return Handler.retryHandler(error)
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

const request = async (config) => {
  console.log('request ====================== ', config)

  // Authentication
  const Handler = require('./OauthHandler').default
  await Handler.adapterHandler(!(config.needAuthentication === false))

  // base url
  if (config.needBaseUrl === false) {
    configHeaderBaseUrl(null)
  } else {
    configHeaderBaseUrl(baseURL)
  }

  usingRetrier = true
  return axiosInstance(config)
  // return axiosInstance({
  //   method: config.method,
  //   url: config.url,
  //   data: config.data,
  //   params: config.params,
  //   cancelToken: config.cancelToken
  // });
}

const cancelRequest = (source, message) => {
  if (source) {
    source.cancel(message)
  }
}

export default { request, cancelRequest, sourceCancel, isCancel, configHeaderAuthorization }
