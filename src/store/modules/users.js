/* src/store/modules/users.js */

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
    uploadProgress: null,
    // user notifications
    notificationsDataSet: [],
    notificationsDataSetTotal: 0,
    notificationsDataSetLastPage: 1,
    loadingNotificationsDataSet: false,
    // user campaigns
    campaignsDataSet: [],
    campaignsDataSetTotal: 0,
    campaignsDataSetLastPage: 1,
    loadingCampaignsDataSet: false,
    // user affiliates
    affiliatesDataSet: [],
    affiliatesDataSetTotal: 0,
    affiliatesDataSetLastPage: 1,
    loadingAffiliatesDataSet: false,
    // user job invitations
    jobInvitationsDataSet: [],
    jobInvitationsDataSetTotal: 0,
    jobInvitationsDataSetLastPage: 1,
    loadingJobInvitationsDataSet: false,
    // user applied jobs
    appliedJobsDataSet: [],
    appliedJobsDataSetTotal: 0,
    appliedJobsDataSetLastPage: 1,
    loadingAppliedJobsDataSet: false
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
      state.loading = false;
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

    SET_UPLOAD_PROGRESS(state, payload) {
      state.uploadProgress = payload;
    },

    REMOVE_UPLOAD_PROGRESS(state) {
      state.uploadProgress = null;
    },

    SET_CAMPAIGNS_DATASET(state, payload) {
      state.campaignsDataSet = payload.data;
      state.campaignsDataSetTotal = payload.total;
      state.campaignsDataSetLastPage = payload.last_page;
      state.loadingCampaignsDataSet = false;
    },

    SET_LOADING_CAMPAIGNS_DATASET(state) {
      state.loadingCampaignsDataSet = true;
    },

    SET_NOTIFICATIONS_DATASET(state, payload) {
      state.notificationsDataSet = payload.data;
      state.notificationsDataSetTotal = payload.total;
      state.notificationsDataSetLastPage = payload.last_page;
      state.loadingNotificationsDataSet = false;
    },

    SET_LOADING_NOTIFICATIONS_DATASET(state) {
      state.loadingNotificationsDataSet = true;
    },

    SET_AFFILIATES_DATASET(state, payload) {
      state.affiliatesDataSet = payload.data;
      state.affiliatesDataSetTotal = payload.total;
      state.affiliatesDataSetLastPage = payload.last_page;
      state.loadingAffiliatesDataSet = false;
    },

    SET_LOADING_AFFILIATES_DATASET(state) {
      state.loadingAffiliatesDataSet = true;
    },

    SET_JOB_INVITATIONS_DATASET(state, payload) {
      state.jobInvitationsDataSet = payload.data;
      state.jobInvitationsDataSetTotal = payload.total;
      state.jobInvitationsDataSetLastPage = payload.last_page;
      state.loadingJobInvitationsDataSet = false;
    },

    SET_LOADING_JOB_INVITATIONS_DATASET(state) {
      state.loadingJobInvitationsDataSet = true;
    },

    SET_APPLIED_JOBS_DATASET(state, payload) {
      state.appliedJobsDataSet = payload.data;
      state.appliedJobsDataSetTotal = payload.total;
      state.appliedJobsDataSetLastPage = payload.last_page;
      state.loadingAppliedJobsDataSet = false;
    },

    SET_LOADING_APPLIED_JOBS_DATASET(state) {
      state.loadingAppliedJobsDataSet = true;
    },
  },

  actions: {
    // List All action
    async list({ commit }, payload) {
      try {
        commit("SET_LOADING_DATASET");
        let response = await $http.get("/users", {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },


    async trendingEmployers({ commit }, payload) {
      try {
        commit("SET_LOADING_DATASET");
        let response = await $http.get("/trending/employers", {
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
        let response = await $http.post("/users", payload);
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
        let response = await $http.get(`/users/${id}`);
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
        let response = await $http.put(`/users/${id}`, payload);
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
    async delete({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.delete(`/users/${id}`);
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

    // Delete Multiple action
    async deleteMultiple({ commit }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/users/delete-multiple`, payload);
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

    // Resend Verification action
    async resendVerification({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/users/${id}/resend-verification`);
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

    // Send Password Verification action
    async sendPasswordVerification({ commit }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(
          `/users/send-password-verification`,
          payload
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
    },

    // Reset New Password action
    async resetNewPassword({ commit }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/users/reset-new-password`, payload);
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

    // Change password action
    async changePassword({ commit }, { id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.patch(
          `/users/${id}/change-password`,
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

    // Upload photo action
    async uploadPhoto({ commit }, { id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/users/${id}/photo`, payload, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: function(progressEvent) {
            let percentCompleted = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
            commit("SET_UPLOAD_PROGRESS", percentCompleted);
          }.bind(this)
        });
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
        commit("SET_SUCCESS", responsePayload.message);
        commit("REMOVE_UPLOAD_PROGRESS");
      } catch (error) {
        commit("REMOVE_UPLOAD_PROGRESS");
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
        let response = await $http.patch(`/users/${id}/archive`);
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

    // Activate User action
    async activate({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.patch(`/users/${id}/activate`);
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
        let response = await $http.patch(`/users/${id}/unarchive`);
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

    // List A User's Campaigns
    async campaigns({ commit }, { id, payload }) {
      try {
        commit("SET_LOADING_CAMPAIGNS_DATASET");
        let response = await $http.get(`/users/${id}/campaigns`, {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_CAMPAIGNS_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },

    // Get user notifications 
    async notifications({ commit }, { id, payload }) {
      try {
        commit("SET_LOADING_NOTIFICATIONS_DATASET");
        let response = await $http.get(`/users/${id}/notifications`, {
          params: payload
        });
        // console.log('Notifications', response)
        let responsePayload = response.data;
        commit("SET_NOTIFICATIONS_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },

    // Get user notifications
    async seen_notifications({ commit }, { id }) {
      try {
        commit("SET_LOADING_NOTIFICATIONS_DATASET");
        let response = await $http.get(`/notifications/seen/${id}`);
        let responsePayload = response.data;
        commit("SET_NOTIFICATIONS_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },
    // List A User's Affilate
    async affiliates({ commit }, { id, payload }) {
      try {
        commit("SET_LOADING_AFFILIATES_DATASET");
        let response = await $http.get(`/users/${id}/affiliates`, {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_AFFILIATES_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },

    // List A User's Job Invitations
    async jobInvitations({ commit }, { id, payload }) {
      try {
        commit("SET_LOADING_JOB_INVITATIONS_DATASET");
        let response = await $http.get(`/users/${id}/job-invitations`, {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_JOB_INVITATIONS_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },

    async applied({ commit }, payload) {
      try {
        commit("SET_LOADING_APPLIED_JOBS_DATASET");
        let response = await $http.get("/jobs/applied", {
          params: payload
        }); 
        let responsePayload = response.data;
        commit("SET_APPLIED_JOBS_DATASET", responsePayload);
      } catch (error) {
        //
      }
    }, 
  }
};
export default storeModule;
