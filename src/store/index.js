import Vue from "vue";
import Vuex from "vuex";

// Modules
import employees from "@/modules/employees/store/index";
import job_codes from "@/modules/job-codes/store/index"
import middleware from "@/middleware/store"
import assessmentHeader from "@/modules/assessment/store/assessment"

// Configurations
import config from "./configurations"

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
    // Configuration
    config,
    
    // Headers and Menus
    assessmentHeader,

    // Modules 
    employees,
    job_codes,
    middleware
  },
});

