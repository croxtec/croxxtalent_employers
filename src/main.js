/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/style.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import CountryFlag from "vue-country-flag";
// Vue.component("country-flag", CountryFlag);

import Vue2Editor from 'vue2-editor';

import 'toastify-js/src/toastify.css';

import { Icon } from '@iconify/vue2';

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(Vue2Editor);

Vue.component('i-icon', Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
