/* eslint-disable no-undef */

const getDefaultState = () => ({
  collapsed: false,
});

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isCollapsed: (state) => state.collapsed,
  },

  mutations: {
    SET_COLLAPSE_STATE(state, payload) {
      state.collapsed = payload;
    },
  },
  actions: {
    setCollapseState({ state, commit }) {
      const value = !state.collapsed;
      commit("SET_COLLAPSE_STATE", value);
    },
  },
};
