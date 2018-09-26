import axios from 'axios';
import UserManager from './UserManager.js'

const HeaderKey = {
    ContentType: 'Content-Type',
    Authorization: 'Authorization',
    Accept: 'Accept'
}

const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 30000;
axiosInstance.defaults.baseURL = 'https://www.reddit.com';
// configAuthorizationHeader('accessToken')

function configAuthorizationHeader(accessToken) {
    if (accessToken) {
        axiosInstance.defaults.headers.common[HeaderKey.Authorization] = 'Bearer ' + accessToken;
    }
}

let unauthorizedRequestQueue = [];
let isRefreshingToken = false;
let isTokenExpried = false;

axiosInstance.interceptors.response.use(function (response) {
}, function (error) {
    console.log('interceptors -- error')
    // check if error is not 401 or is not unauthorized type
    if (!error.response) {
        return Promise.reject(error);
    }

    if (error.response.status !== 401) {
        return Promise.reject(error);
    }

    // origin config
    const orgConfig = error.config;

    // check if error is not 401 or is not unauthorized type
    if (!orgConfig.headers[HeaderKey.Authorization]) {
        return Promise.reject(error);
    }

    //================== 401 Unauthorized ================== 

    // create new promise
    let newReqPromise = new Promise((resolve, reject) => {

        const callback = async (success) => {
            if (success === false) {
                reject(error)
            }

            try {
                const resp = await request(orgConfig);
                resolve(resp);
            } catch (e) {
                reject(e);
            }
        };

        // add callback
        unauthorizedRequestQueue.push(callback);
    });

    // create request to refresh token
    if (isRefreshingToken === false) {
        isRefreshingToken = true;

        UserManager.refreshToken()
            .then((success, accessToken) => {
                configAuthorizationHeader(accessToken);
                return success
            })
            .catch(failure => {
                return failure
            })
            .then(isSuccess => {
                isRefreshingToken = false;
                // request again
                unauthorizedRequestQueue.forEach(callback =>
                    callback(isSuccess)
                );
                configAuthorizationHeader = []
            });
    }
    
    // next
    return newReqPromise;
});

const CancelToken = axios.CancelToken;
const sourceCancel = () => {
    return CancelToken.source();
}

const request = (config) => {
    console.log('request ====================== ', config)
    return axiosInstance({
        method: config.method,
        url: config.url,
        data: config.data,
        params: config.params,
        cancelToken: config.cancelToken
    });
}

const isCancel = (error) => {
    return axios.isCancel(error)
}

const cancelRequest = (source, message) => {
    if (source) {
        source.cancel(message)
    }
}

export default { request, cancelRequest, sourceCancel, isCancel }
