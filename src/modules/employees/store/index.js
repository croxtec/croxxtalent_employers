/* eslint-disable no-undef */
import $request from "@/https/axios";

const getDefaultState = () => {
  return {
    result: null,
    loading: false,
    dataSet: null,
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
    SET_DATA(state, data) {
      // console.log(data);
      state.result = data.result;
      state.loading = false;
      state.dataSet = data.res;
    },

    SET_LOADING_STATUS(state, data) {
      // console.log(data);
      state.loading = data;
    },

    REMOVE_ALERTS(state, data) {
      state.result = data;
    },
  },
  actions: {
    // List Employees
    async list({ commit }) {
      NProgress.start();
      commit("SET_LOADING_STATUS", true);
      try {
        let res = await $request.get(`employers/employee`);
        console.log(res);
        commit("SET_DATA", res );
        // console.log(res.message);
        return res;
      } catch (error) {
        console.log(error.data);
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

    // Contact Us request
    async contact({ commit }, payload) {
      NProgress.start();
      commit("SET_LOADING_STATUS", true);
      try {
        let res = await $request.post(`/croxtec/contact`, payload);
        commit("SET_DATA", { res: res.message, result: "success" });
        console.log(res.message);

        return res;
      } catch (error) {
        commit("SET_DATA", {
          res: error.data.errors,
          result: "null",
        });
        console.log(error.data.errors.email);
        return error;
      } finally {
        NProgress.done();
      }
    },

    removeAlerts({ commit }) {
      commit("REMOVE_ALERTS", null);
    },
  },
};
