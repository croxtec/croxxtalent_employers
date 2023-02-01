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
        dataSetLastPage: 1,
        // user job invitations
        availableJobsDataSet: [],
        availableJobsDataSetTotal: 0,
        availableJobsDataSetLastPage: 1,
        loadingAvailableJobsDataSet: false,

        // Single Available Job
        availableJob: {}

    };
}

const storeModule = {
    namespaced: true,

    state: initialState,

    getters: {
        isLoading: state => state.loading,
        isLoadingDataSet: state => state.loadingDataSet,
        getData: state => state.data,
        getJob: state => state.availableJob

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

        SET_AVAILABLE_JOBS_DATASET(state, payload) {
            state.availableJobsDataSet = payload.data;
            state.availableJobsDataSetTotal = payload.total;
            state.availableJobsDataSetLastPage = payload.last_page;
            state.loadingAvailableJobsDataSet = false;
        },

        SET_LOADING_AVAILABLE_JOBS_DATASET(state) {
            state.loadingAvailableJobsDataSet = true;
        },
        SET_AVAILABLE_JOB(state, payload) {
            state.availableJob = payload.data;
        },
    },

    actions: {
        // List All action
        async list({ commit }, payload) {
            try {
                commit("SET_LOADING_AVAILABLE_JOBS_DATASET");
                let response = await $http.get("/jobs/available", {
                    params: payload
                });
                let responsePayload = response.data;
                // commit("SET_DATASET", responsePayload);
                commit("SET_AVAILABLE_JOBS_DATASET", responsePayload);
            } catch (error) {
                //
            }
        },

        // View action
        async view({ commit }, id) {
            commit("SET_LOADING");
            console.log(id);
            try {
                let response = await $http.get(`/jobs/available/${id}`);

                let responsePayload = response.data;
                console.log(response);
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

        // Job Application
        async applied({ commit }, payload) {
            commit("SET_LOADING_AVAILABLE_JOBS_DATASET");
            try {
                let response = await $http.post("/jobs/applied", payload);
                let responsePayload = response.data;
                commit("SET_DATASET", responsePayload);
                commit("SET_SUCCESS", responsePayload.status);
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
        // Job Application
        async unapplied({ commit }, id) {
            commit("SET_LOADING_AVAILABLE_JOBS_DATASET");
            try {
                let response = await $http.post("/jobs/unapplied/" + id);
                let responsePayload = response.data;
                commit("SET_DATASET", responsePayload);
                commit("SET_SUCCESS", responsePayload.status);
                console.log(response)
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