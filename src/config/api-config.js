
// Router
const app = {
  info: (data, parameter, source) => {
    return {
      url: '/r/frontend.json',
      method: 'get',
      data,
      parameter,
      cancelToken: source.token,
    }
  },
}

const user = {
  me: (data, parameter) => {
    return {
      url: '/user/me',
      method: 'get',
      data,
      parameter,
      // cancelToken: source.token,
    }
  },
  users: (data, parameter) => {
    return {
      url: '/users',
      method: 'get',
      data,
      parameter,
      // cancelToken: source.token,
    }
  }
}

const oAuth = {
  login: (data, parameter) => {
    return {
      url: '/login',
      method: 'post',
      data,
      parameter,
      // cancelToken: source.token,
    }
  },
  logout: (data, parameter) => {
    return {
      url: '/logout',
      method: 'post',
      data,
      parameter,
      // cancelToken: source.token,
    }
  },
  refreshToken: (data, parameter) => {
    return {
      url: '/token',
      method: 'post',
      data,
      parameter,
      // cancelToken: source.token,
    }
  },
}

export default {
  app,
  user,
  oAuth
}
