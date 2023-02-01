/* src/store/modules/cv-hobbies.js */

import $http from "../../axios";

function initialState() {
  return {
    loading: false,
    loadingDataSet: false,
    error: false,
    success: false,
    validationErrors: {},
    data: {},
    dataSet: [],
    dataSetTotal: 0,
    dataSetLastPage: 1
  };
}

const storeModule = {
  namespaced: true,

  state: initialState,

  getters: {
    isLoading: state => state.loading,
    isLoadingDataSet: state => state.loadingDataSet,
    getData: state => state.data
  },

  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.validationErrors = {};
    },

    SET_LOADING_DATASET(state) {
      state.loadingDataSet = true;
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
      state.validationErrors = payload;
    },

    REMOVE_ERROR_SUCCESS(state) {
      state.error = false;
      state.success = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_DATA(state, payload) {
      state.data = payload.data;
    },

    SET_DATASET(state, payload) {
      state.dataSet = payload.data;
      state.dataSetTotal = payload.total;
      state.dataSetLastPage = payload.last_page;
      state.loadingDataSet = false;
    }
  },

  actions: {
    // List All action
    async list({ commit }, { cv_id, payload }) {
      try {
        commit("SET_LOADING_DATASET");
        let response = await $http.get(`/cvs/${cv_id}/hobbies`, {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },

    // Create action
    async create({ commit }, { cv_id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/cvs/${cv_id}/hobbies`, payload);
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
        commit("SET_SUCCESS", responsePayload.message);
      } catch (error) {
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
      }
    },

    // View action
    async view({ commit }, { cv_id, work_experience_id }) {
      commit("SET_LOADING");
      try {
        let response = await $http.get(
          `/cvs/${cv_id}/hobbies/${work_experience_id}`
        );
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
        commit("SET_SUCCESS", responsePayload.message);
      } catch (error) {
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
      }
    },

    // Update action
    async update({ commit }, { cv_id, work_experience_id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.put(
          `/cvs/${cv_id}/hobbies/${work_experience_id}`,
          payload
        );
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
        commit("SET_SUCCESS", responsePayload.message);
      } catch (error) {
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
      }
    },

    // Delete action
    async delete({ commit }, { cv_id, work_experience_id }) {
      commit("SET_LOADING");
      try {
        let response = await $http.delete(
          `/cvs/${cv_id}/hobbies/${work_experience_id}`
        );
        let responsePayload = response.data;
        commit("SET_SUCCESS", responsePayload.message);
      } catch (error) {
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
      }
    }
  }
};
export default storeModule;
