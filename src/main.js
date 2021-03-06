import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/element.js'
// 导入全局样式表
import '@/assets/css/global.css'
import axios from 'axios'
Vue.config.productionTip = false
// 配置请求的跟路径
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_URL
})
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
