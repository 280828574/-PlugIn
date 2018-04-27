// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//路由
import router from './router'

//CSS初始化
import reset from './assets/css/reset.css'

//rem
import rem from './assets/js/rem.js'
/* eslint-disable no-new */
new Vue({
  router,
  el:'#app',
  render:h => h(App)
})
