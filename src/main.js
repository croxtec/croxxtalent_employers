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

// Vee Validate
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
// import { required, email } from 'vee-validate/dist/rules';
import { messages } from "vee-validate/dist/locale/en.json";
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);

import Vue2Editor from 'vue2-editor';
Vue.use(Vue2Editor);

import 'toastify-js/src/toastify.css';

import { Icon } from '@iconify/vue2';

Vue.config.productionTip = false;
Vue.use(ElementUI);

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

import 'vue-select/dist/vue-select.css';

Vue.component('i-icon', Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
