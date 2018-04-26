import Vue from 'vue';
import VueI18n from 'vue-i18n';
import modules from './lang';

process.env.NODE_ENV === 'development' && Vue.use(VueI18n);

Vue.config.lang = 'zh';

// set locales
Object.keys(modules).forEach(lang => {
    Vue.locale(lang, modules[lang]);
});
