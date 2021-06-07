import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './http.js'
import './style.css'

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.use(ElementUI)

Vue.mixin({
  methods: {
    getAuthHeaders () {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
