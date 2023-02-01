/* src/store/modules/countries.js */

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
    dataSetLastPage: 1,
    statesDataSet: [],
    statesDataSetTotal: 0,
    statesDataSetLastPage: 1,
    loadingStatesDataSet: false
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
    },

    SET_STATES_DATASET(state, payload) {
      state.statesDataSet = payload.data;
      state.statesDataSetTotal = payload.total;
      state.statesDataSetLastPage = payload.last_page;
      state.loadingStatesDataSet = false;
    },

    SET_LOADING_STATES_DATASET(state) {
      state.loadingStatesDataSet = true;
    }
  },

  actions: {
    // List All action
    async list({ commit }, payload) {
      try {
        commit("SET_LOADING_DATASET");
        let response = await $http.get("/settings/countries", {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },

    // Create action
    async create({ commit }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $http.post("/settings/countries", payload);
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
    async view({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.get(`/settings/countries/${id}`);
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
    async update({ commit }, { id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.put(`/settings/countries/${id}`, payload);
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

    // Archive action
    async archive({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.patch(`/settings/countries/${id}/archive`);
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
    },

    // Unarchive action
    async unarchive({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.patch(`/settings/countries/${id}/unarchive`);
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
    },

    // Delete action
    async delete({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.delete(`/settings/countries/${id}`);
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
    },

    // List A Country's States
    async states({ commit }, { id, payload }) {
      try {
        commit("SET_LOADING_STATES_DATASET");
        let response = await $http.get(`/settings/countries/${id}/states`, {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_STATES_DATASET", responsePayload);
      } catch (error) {
        //
      }
    }
  }
};
export default storeModule;
