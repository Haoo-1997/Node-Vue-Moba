import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import 'swiper/swiper-bundle.css'

import Card from './components/Card.vue'
Vue.component('m-card', Card)
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

// 封装前端接口
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
