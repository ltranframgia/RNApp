// {
//   url,
//   method,
//   data,
//   params, 
//   cancelToken: source.token,
//   needAuthentication,
//   needBaseUrl,
// }

// Router
const app = {
  info: () => {
    return {
      url: 'https://www.reddit.com/r/frontend.json',
      method: 'get',
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

const users = {
  me: (source) => {
    return {
      url: '/users/me',
      method: 'get',
      cancelToken: source.token,
    }
  },
  user: (id, params, source) => {
    return {
      url: `/users/${id}`,
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
  users,
}
