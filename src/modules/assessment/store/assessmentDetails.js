/* eslint-disable no-undef */

const getDefaultState = () => ({
    details: {
        skill: {
            name: "Select Skill"
        },
        core: {
            name: "Select Core"
        },
        domain: {
            name: "Select Domain"
        },
        delivery: "",
        level: "",
        assessment_name: "",
        category: "",
        domain: ""
    },
    questions: []
  });
  
  export default {
    namespaced: true,
    state: getDefaultState(),
    getters: {
      isActiveEl: (state) => state.activeEl,
      getQuestions: (state) => state.questions,
    },
  
    mutations: {
      SET_DETAILS(state, payload) {
        state.details = payload;
      },
      SET_CORE(state, payload) {
        state.details.core = payload;
      },
      SET_DOMAIN(state, payload) {
        state.details.domain = payload;
      },
      SET_SKILL(state, payload) {
        state.details.skill = payload;
      },
      SET_QUESTIONS(state, payload) {
        state.questions.push(payload);
      },
     
    },
    actions: {
    },
  };
  