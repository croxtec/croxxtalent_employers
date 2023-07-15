/* eslint-disable no-undef */
import $request from "@/https/axios";
import Swal from 'sweetalert2'
// import toastify from "toastify-js"

const getDefaultState = () => {
  return {
    results: null,
    loading: false,
    success: null,
    error: null,
    data: {},
    dataSet: [],
    dataSetTotal: 0,
    dataSetLastPage: 1,
    validationErrors: {},
    createEmployeeModal: false,
    singleDataSet: {}
  };
};

export default {
  namespaced: true,
  strict: true,
  // plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    getSingleDataSet: (state) => state.singleDataSet
    // auth: (state) => state.auth,
  },
  mutations: {
    SET_DATASET(state, payload) {
      state.results = payload.data;
      state.dataSet = payload.data;
      state.dataSetTotal = payload.data?.length;
      state.dataSetLastPage = payload.last_page;
      state.loading = false;
      state.error = false;
      state.success = false;
      state.validationErrors = {};
    },

    SET_SINGLE_DATA(state, payload) {
      state.singleDataSet = payload;
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
        commit("SET_DATASET", res.data);
        return res;
      } catch (error) {
        console.log(error.data);
        commit('SET_ERROR', error.data.message)
        return error;
      } finally {
        NProgress.done();
      }
    },

    //View Assessment
    async view({ commit }, id) {
      NProgress.start();
      commit("SET_LOADING_STATUS");
      try {
        let res = await $request.get(`assesments/${id}/assigned/employees`);
       console.log(res.data.data);
       let resPayload = res.data.data
       commit("SET_SINGLE_DATA", resPayload)
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

    // Publish Assessment
    async publish({ commit, dispatch }, id) {
      NProgress.start();
      commit("SET_LOADING_STATUS");
      try {
        let res = await $request.patch(`assesments/${id}/publish`);
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: 'Assesment Published',
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

     // UnPublish Assessment
     async unPublish({ commit, dispatch }, id) {
      NProgress.start();
      commit("SET_LOADING_STATUS");
      try {
        let res = await $request.patch(`assesments/${id}/unpublish`);
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: 'Assesment Unpublished',
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
