// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//CSS初始化
import reset from './assets/css/reset.css'

//rem
import rem from './assets/js/rem.js'

//阿里Icon库
import icon from './assets/js/font_467694_js9rj8cabc56zuxr'



// VueAxios

import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://xwb.91buyun.com/';
axios.defaults.timeout = 30000;
//路由
import router from './router'

import domain from './assets/js/domain';
global.domain = domain;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el:'#app',
  render:h => h(App)
})
