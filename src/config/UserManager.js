
import NetworkManager from '../config/NetworkManager'
import { AsyncStorage } from 'react-native';

const USER_ID = 'USER_ID';
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';

const configRequestToken = (refresh_token) => {
  return {
    url: '/token',
    method: 'post',
    data: {
      refresh_token: refresh_token,
      client_id: 'client_id',
      client_secret: 'client_secret',
      grant_type: 'refresh_token',
    }
  }
}

export default {

  userId: async () => await AsyncStorage.getItem(USER_ID),
  accessToken: async () => await AsyncStorage.getItem(ACCESS_TOKEN),
  refreshToken: async () => await AsyncStorage.getItem(REFRESH_TOKEN),
  getToken: async () => {
    let refresh_token = await refreshToken()
    if (!refresh_token) {
      Promise.reject(false)
    }

    // Request
    NetworkManager.request(configRequestToken(refresh_token))
      .then(function (response) {
        const accessToken = response.data.access_token
        if (accessToken) {
          Promise.resolve(true, accessToken)
        } else {
          Promise.reject(false)
        }
      })
      .catch(function (error) {
        Promise.reject(null)
      });
  }
}
