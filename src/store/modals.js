/* eslint-disable no-undef */

const getDefaultState = () => {
    return {
      addManager: false,
      jobCodeId: ''
    };
  };
  
  export default {
    namespaced: true,
    state: getDefaultState(),
    getters: {
      isCollapsed: (state) => state.collapsed,
    },
  
    mutations: {
      SET_ADD_MANAGER(state, payload, id) {
        state.addManager = payload.value;
        state.jobCodeId =  payload.id
      },
      
      CLEAR_MODAL(state) {
        state.addManager = false;
      },
    },
    actions: {
      setAddManager({ state, commit }, id) {
        var value = state.addManager ? false : true;
        let payload = {
            value: value,
            id: id
        }
        commit("SET_ADD_MANAGER", payload);
        console.log(payload);
      },
    },
  };
  