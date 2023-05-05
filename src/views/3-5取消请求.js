// 取消请求 用于取消正在进行的http请求

import axios from 'axios'


axios.interceptors.request.use(config => {
  // 在发送请求前做些什么
  return config
}, error => {
  // 在请求错误的时候做什么
  return Promise.reject(error)
})

let source = axios.CancelToken.source()

axios.get('/data.json', {
  cancelToken: source.token
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 取消请求 (message可选)
source.cancel('cancel http')

// 例子   商城 3-5s
