// 'axios3-2实例相关配置'
/* eslint-disable */
import axios from 'axios'

axios.create({
  baseURL: 'http://localhost:8080', // 请求的域名， 基本地址
  timeout: 5000, // 请求超时时长  ms
  url: '/data.json', // 请求路径
  method: 'get, post, put, patch,delete', // 请求方法
  headers: {}, // 设置请求头
  params: {}, // 请求参数拼接url
  data: {} // 请求参数不拼接
})
axios.get('/data.json')

// 1.axios全局配置   优先级最低   很少用
axios.defaults.timeout = 1000
axios.defaults.baseUrl = 'http://localhost:8080'
// 2.axios实例配置
let instance2 = axios.create({})
instance2.defaults.timeout = 1000
// 3.axios请求配置   优先级最高
instance.get('/data.json', {
  timeout: 5000
})

// 实际开发
// 有两种请求接口
// http:localhost: 9090  http:localhost: 9091
let instance11 = axios.create({
  baseURL: 'http:localhost: 9090',
  timeout: 5000
})
let instance22 = axios.create({
  baseURL: 'http:localhost: 9090',
  timeout: 6000
})
instance11.get('/contactList',{ params: {} }).then(res => {
  console.log(res)
})
instance22.get('/orderList',{
  timeout: 8000 // 重新设置
}).then(res => {
  console.log(res)
})
