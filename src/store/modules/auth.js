/* src/store/modules/auth.js */

import Vue from "vue";
import Cookies from "js-cookie";
import $http from "../../axios";
import config from "../../config";

Vue.use(require("vue-moment"));

function initialState() {
  return {
    loading: false,
    error: false,
    success: false,
    regError: false,
    regSuccess: false,
    validationErrors: {},
    loggedIn: false,
    // accessToken: null,
    // accessTokenExpiresIn: null,
    // accessTokenExpiresAt: null,
    user: {}
  };
}

const storeModule = {
  namespaced: true,

  state: initialState,

  getters: {
    isLoading: state => state.loading,
    isLoggedIn(state) {
      return state.loggedIn
        ? state.loggedIn
        : !!Cookies.get(config.accessTokenStorageKey);
    },
    getAccessToken() {
      return Cookies.get(config.accessTokenStorageKey);
    },
    getAccessTokenExpiresAt() {
      return Cookies.get(config.accessTokenExpiresAtStorageKey);
    },
    getAccessTokenExpiresIn() {
      return Cookies.get(config.accessTokenExpiresInStorageKey);
    },
    getUser: state => state.user
  },

  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
    },

    SET_ERROR(state, message) {
      state.error = message;
      state.success = false;
      state.loading = false;
      state.validationErrors = {};
    },

    SET_REG_ERROR(state, message) {
      state.regError = message;
      state.regSuccess = false;
      state.loading = false;
      state.validationErrors = {};
    },

    SET_SUCCESS(state, message) {
      state.success = message;
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_REG_SUCCESS(state, message) {
      state.regSuccess = message;
      state.regError = false;
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
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_LOGGED_IN(state, payload) {
      state.loggedIn = payload;
    },

    LOGIN(state, payload) {
      state.loading = false;
      state.loggedIn = true;

      Cookies.set(config.accessTokenStorageKey, payload.accessToken, {
        expires: new Date(payload.accessTokenExpiresAt),
        path: "/",
        domain: window.location.hostname,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
      });
      Cookies.set(
        config.accessTokenExpiresInStorageKey,
        payload.accessTokenExpiresIn,
        {
          expires: new Date(payload.accessTokenExpiresAt),
          path: "/",
          domain: window.location.hostname,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production"
        }
      );
      Cookies.set(
        config.accessTokenExpiresAtStorageKey,
        payload.accessTokenExpiresAt,
        {
          expires: new Date(payload.accessTokenExpiresAt),
          path: "/",
          domain: window.location.hostname,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production"
        }
      );
    },

    SET_USER(state, payload) {
      state.user = payload;
    },

    LOGOUT(state) {
      state.loggedIn = false;
      state.user = {};
      Cookies.remove(config.accessTokenStorageKey, {
        path: "/",
        domain: window.location.hostname
      });
      Cookies.remove(config.accessTokenExpiresInStorageKey, {
        path: "/",
        domain: window.location.hostname
      });
      Cookies.remove(config.accessTokenExpiresAtStorageKey, {
        path: "/",
        domain: window.location.hostname
      });
    }
  },

  actions: {
    // Authenticate Session action
    async authenticateSession({ commit, dispatch, getters }, toRoute) {
      const accessToken = Cookies.get(config.accessTokenStorageKey);
      const accessTokenExpiresIn = Cookies.get(
        config.accessTokenExpiresInStorageKey
      );
      const accessTokenExpiresAt = Cookies.get(
        config.accessTokenExpiresAtStorageKey
      );
      if (accessToken) {
        commit("LOGIN", {
          accessToken: accessToken,
          accessTokenExpiresIn: accessTokenExpiresIn,
          accessTokenExpiresAt: accessTokenExpiresAt
        });
        // fetch authenticated user's profile
        try {
          let response = await $http.get("/auth/user");
          let responsePayload = response.data;
          // console.log(responsePayload);
          commit("SET_USER", responsePayload.data);
          // monitor and refresh token before expiry
          setInterval(function() {
            let nowTs = Vue.moment().unix();
            let expiryTs = Vue.moment(
              Cookies.get(config.accessTokenExpiresAtStorageKey)
            ).unix();
            let tokenLifetimeLeft = expiryTs - nowTs;
            if (
              tokenLifetimeLeft <=
              config.accessTokenExpiryTimeLeftForFrontendAutoRefresh
            ) {
              if (getters.isLoading === false) {
                dispatch("refreshToken").then(() => {
                  //
                });
              }
            }
          }, 5000);
        } catch (error) {
          if (error.status && error.status === 401) {
            commit("LOGOUT");
          }
          if (toRoute.name !== "login") {
            location.replace(toRoute.fullPath);
          }
        }
      } else {
        commit("LOGOUT");
        if (toRoute.name !== "login") {
          location.replace(toRoute.fullPath);
        }
      }
    },

    // Login authentication action
    async login({ commit }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $http.post("/auth/login", payload);
        let responsePayload = response.data;
        commit("LOGIN", {
          accessToken: responsePayload.data.access_token,
          accessTokenExpiresIn: responsePayload.data.expires_in,
          accessTokenExpiresAt: responsePayload.data.expires_at
        });
        commit("SET_USER", responsePayload.data.user);
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
        commit("LOGOUT");
      }
    },

    // Register action
    async register({ commit }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $http.post("/auth/register", payload);
        let responsePayload = response.data;
        commit("LOGIN", {
          accessToken: responsePayload.data.access_token,
          accessTokenExpiresIn: responsePayload.data.expires_in,
          accessTokenExpiresAt: responsePayload.data.expires_at
        });
        commit("SET_USER", responsePayload.data.user);
        commit("SET_REG_SUCCESS", responsePayload.message);
      } catch (error) {
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_REG_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_REG_ERROR", "Internal connection error, please try again.");
      }
    },

    // retrieve auth user data
    async user({ commit }) {
      commit("SET_LOADING");
      try {
        let response = await $http.get("/auth/user");
        let responsePayload = response.data;
        commit("SET_USER", responsePayload.data);
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

    // refresh access token action
    async refreshToken({ commit }) {
      commit("SET_LOADING");
      try {
        let response = await $http.post("/auth/refresh");
        let responsePayload = response.data;
        commit("LOGIN", {
          accessToken: responsePayload.data.access_token,
          accessTokenExpiresIn: responsePayload.data.expires_in,
          accessTokenExpiresAt: responsePayload.data.expires_at
        });
      } catch (error) {
        location.reload();
      }
    },

    // Logout action
    async logout({ commit }) {
      commit("SET_LOADING");
      try {
        let response = await $http.post("/auth/logout");
        let responsePayload = response.data;
        commit("SET_SUCCESS", responsePayload.message);
        commit("LOGOUT");
      } catch (error) {
        commit("REMOVE_ERROR_SUCCESS");
        commit("LOGOUT");
      }
    }
  }
};
export default storeModule;
