/* src/store/modules/skills.js */

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
      state.dataSet = payload.skills;
      // state.dataSetTotal = payload.total;
      // state.dataSetLastPage = payload.last_page;
      state.loadingDataSet = false;
    }
  },

  actions: {
    // List All action
    async list_tertiary({ commit }, payload) {
      try {
        commit("SET_LOADING_DATASET");
        let response = await $http.get("/settings/skills/levels/tertiary/"+payload.id, {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },

    // Create Tertiary
    async create_tertiary ({ commit }, payload) {
      commit("SET_LOADING");
      // console.log("Launch",payload);
      try {
        let response = await $http.post("/settings/skills/levels/tertiary", payload);
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

    // Create Secondary
    async create_secondary ({ commit }, payload) {
      commit("SET_LOADING");
      console.log("Launch Secondary",payload);
      try {
        let response = await $http.post("/settings/skills/levels/secondary", payload);
        let responsePayload = response.data;
        console.log(responsePayload)
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

    // Delete Secondary
    async delete_secondary({ commit }, id){
      commit("SET_LOADING");
      try {
        let response = await $http.delete(`/settings/skills/levels/secondary/${id}`);
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

    // Update Secondary Action
    async update_secondary({ commit }, { id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.put(`/settings/skills/levels/secondary/${id}`, payload);
        let responsePayload = response.data;
        console.log(responsePayload);
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

    // Update Secondary Action
    async update_tertiary({ commit }, { id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.put(`/settings/skills/levels/tertiary/${id}`, payload);
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
  }
};
export default storeModule;
