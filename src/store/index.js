import Vue from "vue";
import Vuex from "vuex";

// Modules
import createPersistedState from "vuex-persistedstate";
import employees from "@/modules/employees/store/index";
import job_codes from "@/modules/job-codes/store/index";
import assessments from "@/modules/assessment/store/index";
import competency from "@/modules/competence/store/index";
import campaigns from "@/modules/campaigns/store/index";
import candidates from "@/modules/candidates/store/index"

import middleware from "@/middleware/store";

// Headers and Extras
import assessmentHeader from "@/modules/assessment/store/assessment";
import assessmentDetails from "@/modules/assessment/store/assessmentDetails";

// Configurations
import config from "./configurations";
import modals from "./modals";

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
    modals,

    // Headers and Menus
    assessmentHeader,
    assessmentDetails,

    // Modules
    employees,
    job_codes,
    assessments,
    competency,
    campaigns,
    candidates,

    middleware,
  },
});
