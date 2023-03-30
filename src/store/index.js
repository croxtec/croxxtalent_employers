import Vue from "vue";
import Vuex from "vuex";

// Modules

import auth from "@/modules/auth/store/index";
import dashboard from "@/modules/dashboard/store/index";
// Drawer
import drawer from "./drawer";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    drawer,
    dashboard,
  },
});
