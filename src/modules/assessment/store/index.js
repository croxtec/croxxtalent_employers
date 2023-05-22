/* eslint-disable no-undef */
import $request from "@/https/axios";
import Swal from 'sweetalert2'
// import toastify from "toastify-js"

const getDefaultState = () => {
  return {
    results: null,
    loading: false,
    dataSet: null,
    success: null,
    error: null,
    validationErrors: {},
    createEmployeeModal: false
  };
};

export default {
  namespaced: true,
  strict: true,
  // plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    // auth: (state) => state.auth,
  },
  mutations: {
    SET_DATA(state, payload) {
      state.results = payload.data;
      state.dataSet = payload;
      state.loading = false;
      state.error = false;
      state.success = false;
      state.validationErrors = {};
    },

    SET_LOADING_STATUS(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.validationErrors = {};
    },

    SET_ERROR(state, message) {
      state.error = message;
      state.success = false;
      state.loading = false;
      state.validationErrors = {};
    },

    SET_SUCCESS(state, message) {
      state.success = message;
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_VALIDATION_ERRORS(state, payload) {
      state.loading = false;
      state.validationErrors = payload;
    },

    SET_CREATE(state, payload) {
      state.createEmployeeModal = payload
    },

    REMOVE_ALERTS(state) {
      state.error = false;
      state.success = false;
      state.validationErrors = {};
    }
  },
  actions: {
    // List Assessments
    async list({ commit }) {
      NProgress.start();
      commit("SET_LOADING_STATUS");
      try {
        let res = await $request.get(`/assesments`);
        console.log(res);
        commit("SET_DATA", res.data.data);
        // console.log(res.message);
        return res;
      } catch (error) {
        console.log(error.data);
        commit('SET_ERROR', error.data.message)
        // commit("SET_DATA", {
        //   res: error.data.errors.email,
        //   result: "error",
        // });
        // console.log(error.data.errors.email);
        return error;
      } finally {
        NProgress.done();
      }
    },

    // Create Assessment
    async create({ commit, dispatch }, payload) {
      NProgress.start();
      commit("SET_LOADING_STATUS");
      try {
        let res = await $request.post(`assesments`, payload);
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: 'Assessment created successfully',
        })
        dispatch("list");
        return res;
      } catch (error) {
        console.log(error.data);
        if (error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              console.log(errorPayload.errors);
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
        return error.response;
      } finally {
        NProgress.done();
      }
    },

    removeAlerts({ commit }) {
      commit("REMOVE_ALERTS", null);
    },
  },
};
