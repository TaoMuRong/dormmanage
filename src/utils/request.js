import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://118.190.39.221:5188',
  // withCredentials: true, // 跨域请求时发送cookie
  timeout: 5000 
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 发送请求前

    if (store.getters.token) {
      // 让每个请求带token
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // 请求错误
    console.log(error) 
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  /**
   * 得到http头部信息和状态
  */

  /**
   * 自定义请求状态码
   */
  response => {
    const res = response.data

    return res

  },
  error => {
    console.log('err' + error) 
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
