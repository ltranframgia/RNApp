
import NetworkManager from './NetworkManager'
import { AsyncStorage } from 'react-native';
import ApiConfig from '../config/api-config';

const USER_ID = 'USER_ID';
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';


let accessToken;

export default {

  userId: async () => await AsyncStorage.getItem(USER_ID),
  accessToken: async () => {
    if (!accessToken) {
      try {
        const value = await AsyncStorage.getItem(ACCESS_TOKEN);
        if (value !== null) {
          accessToken = value
          return Promise.resolve(accessToken)
        } else {
          return Promise.reject()
        }
      } catch (error) {
        return Promise.reject()
      }
    }

    return Promise.resolve(accessToken)
  },
  refreshToken: async () => await AsyncStorage.getItem(REFRESH_TOKEN),
  getToken: async () => {
    let refresh_token = await refreshToken()
    if (!refresh_token) {
      return Promise.reject(false)
    }

    // Request
    NetworkManager.request(ApiConfig.oAuth.refreshToken(refresh_token))
      .then(function (response) {
        const accessToken = response.data.access_token
        if (accessToken) {
          return Promise.resolve(true, accessToken)
        } else {
          return Promise.reject(false)
        }
      })
      .catch(function (error) {
        return Promise.reject(null)
      });
  }
}
