<template>
  <div class="axios实例">
    3-1 axios实例
  </div>
</template>

<script>
/* eslint-disable */
// axios实例
// 后端接口地址多个， 并且超时时长不一样
import axios from 'axios'

export default {
  name: 'axios实例',
  components: {

  },
  created () {
    // let instance = axios.create({
    //   baseURL: '/api',  // 这里是全局统一加上了 '/api' 前缀，所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错
    //   timeout: 5000
    // })
    // let instance2 = axios.create({
    //   baseURL: '/api2',  // 这里是全局统一加上了 '/api' 前缀，所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错
    //   timeout: 6000
    // })
    // instance.get('./data.json').then(res => {
    //   console.log(res)
    // })
  }
}
</script>
