// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/locale';
import '@/assets/styles';
import Vue from 'vue';
import api from '@/api';
import constant from '@/constant';
import store from '@/store';
import router from '@/router';
import App from '@/App';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$const = constant;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});
