import {
  login,
  logout,
  // getInfo
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  resetRouter
} from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // 用户登陆
  login({
    commit
  }, userInfo) {
    const {
      id,
      pwd
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        id: id.trim(),
        pwd: pwd
      }).then(response => {
        const {
          data
        } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        window.localStorage.setItem("loginData",JSON.stringify(data))
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 得到用户信息
  // getInfo({
  //   commit,
  //   state
  // }) {
  //   return new Promise((resolve, reject) => {
  //     getInfo(state.token).then(response => {
  //       const {
  //         data
  //       } = response

  //       if (!data) {
  //         return reject('验证失败，请重新登陆.')
  //       }

  //       const {
  //         name,
  //         avatar
  //       } = data

  //       commit('SET_NAME', name)
  //       commit('SET_AVATAR', avatar)
  //       resolve(data)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // 用户登出
  logout({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // 移出令牌
        resetRouter()// 重置路由
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 直接移出token不用请求后端接口
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
