import Vue from "vue";
import Vuex from "vuex";

// Modules
import createPersistedState from "vuex-persistedstate";
import auth from "@/modules/auth/store/index";
import dashboard from "@/modules/dashboard/store/index";

// Extras
import drawer from "./drawer";
import assessmentHeader from "@/modules/assessment/store/assessment";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    assessmentHeader,
    auth,
    drawer,
    dashboard,
  },
});
