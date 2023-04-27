import Vue from "vue";
import Vuex from "vuex";

// Modules
import employees from "@/modules/employees/store/index";
import job_codes from "@/modules/job-codes/store/index"

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
    employees,
    job_codes
  },
});

