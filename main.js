import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// 引入全局样式
import '@/assets/css/index.scss';
// 引入全局方法
import * as utils from '@/utils/utils.js'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$utils = utils
  return {
    app
  }
}
// #endif