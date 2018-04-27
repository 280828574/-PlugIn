import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

process.env.NODE_ENV === 'development' && Vue.use(Vuex);

export default new Vuex.Store({
    modules
});
