
// Router
const app = {
  info: (params, source) => {
    return {
      url: 'https://www.reddit.com/r/frontend.json',
      method: 'get',
      params,
      cancelToken: source.token,  
      needAuthentication: false,
      needBaseUrl: false
    }
  },
}

const oAuth = {
  login: (data) => {
    return {
      url: '/login',
      method: 'post',
      data,
    }
  },
  logout: () => {
    return {
      url: '/logout',
      method: 'post',
    }
  },
  refreshToken: (refresh_token) => {
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
  },
}

const user = {
  me: (source) => {
    return {
      url: '/user/me',
      method: 'get',
      cancelToken: source.token,
    }
  },
  user: (id, params, source) => {
    return {
      url: `/user/${id}`,
      method: 'get',
      params,
      cancelToken: source.token,
    }
  },
  users: (params, source) => {
    return {
      url: '/users',
      method: 'get',
      params,
      cancelToken: source.token,
    }
  }
}

export default {
  app,
  oAuth,
  user,
}
