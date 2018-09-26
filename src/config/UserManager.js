
import NetworkManager from '../config/NetworkManager'

const configRequestInfo = (data, parameter) => {
  return {
    url: '/oauth/token',
    method: 'get',
    data,
    parameter,
  }
}

function refreshToken() {
  return new Promise((resolve, reject) => {
    NetworkManager.request(configRequestInfo())
      .then(function (response) {
        const accessToken = response.data.access_token
        if (accessToken) {
          resolve(true, accessToken)
        } else {
          reject(false)
        }
      })
      .catch(function (error) {
        reject(null)
      });
  });
}


export default { refreshToken }