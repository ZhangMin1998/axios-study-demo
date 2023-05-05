// 错误处理  请求错误时进行的处理

import axios from 'axios'


axios.interceptors.request.use(config => {
  // 在发送请求前做些什么
  return config
}, error => {
  // 在请求错误的时候做什么
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  // 请求成功对响应数据做处理
  return res
}, error => {
  // 响应错误的时候做什么
  return Promise.reject(error)
})

axios.get('/data.json').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 例子  实际开发中  一般添加统一错误处理
let instance = axios.create({})
instance.interceptors.request.use(config => {
  return config
}, error => {
  // 401超时   404 not found
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  return res
}, error => {
  // 500 系统错误  502系统重启
  return Promise.reject(error)
})
