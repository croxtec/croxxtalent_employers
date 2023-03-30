/* eslint-disable no-undef */

const getDefaultState = () => {
  return {
    collapsed: false,
  };
};

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
      let value = state.collapsed ? false : true;
      commit("SET_COLLAPSE_STATE", value);
    },
  },
};
