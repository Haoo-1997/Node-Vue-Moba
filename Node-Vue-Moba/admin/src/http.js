import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

// 给请求头加一个token信息,方便后续的权限验证
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token // Bearer属于行业规范
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 全局监听错误,通用的错误处理方案
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
  // console.log(err.response.data.message)
  // 使用element-UI的$message方法提示错误
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    // 401错误跳回登录页
    if (err.response.status === 401) {
      router.push('/login')
    }
  }
  return Promise.reject(err)
})

export default http
