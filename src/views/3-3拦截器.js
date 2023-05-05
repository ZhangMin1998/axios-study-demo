// 拦截器 在请求或响应被处理前拦截
// 请求拦截器 响应拦截器
/* eslint-disable */

import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求前做些什么
  return config
}, error => {
  // 在请求错误的时候做什么
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(res => {
  // 请求成功对响应数据做处理
  return res
}, error => {
  // 响应错误的时候做什么
  return Promise.reject(error)
})
axios.get().then(res => { }) // 返回的数据最后到这里
axios.get().catch(err => { }) // 响应错误最后到这里

// 取消拦截器（了解）
let interceptors = axios.interceptors.request.use(config => {
  config.headers = {
    auth: true
  }
  return config
})
axios.interceptors.request.eject(interceptors)

// 例子 登录状态（tiken: ''）
let instance = axios.create({})
instance.interceptors.request.use(config => {
  config.headers.token = ''
  return configd
})
// 不需要token的接口
let newInstance = axios.create({})
