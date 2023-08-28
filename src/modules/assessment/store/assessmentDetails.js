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
        domain: "",
        description: ""
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
      SET_REFRESH_STATE(state) {
        state.details.domain = "";
        state.details.core = "";
        state.details.skill = "";
        state.delivery= "";
        state.level= "";
        state.assessment_name= "";
        state.category= "";
        state.domain= "";
        state.description= "";
        state.questions=  [];
      },
     
    },
    actions: {

    },
  };
  