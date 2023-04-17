/* eslint-disable no-undef */

const getDefaultState = () => ({
  activeEl: 1,
  activeItem: 1,
  questionsContainer: false,
  assessmentHeaderMenu: [
    {
      id: 1,
      title: 'Assessment Details',
    },
    {
      id: 2,
      title: 'Question Creation',
    },
    {
      id: 3,
      title: 'Assign Manager',
    },
  ],
  questionsHeader: [
    {
      id: 1,
      title: 'Introduction',
    },
    {
      id: 2,
      title: 'Single choice',
    },
    {
      id: 3,
      title: 'Multiple choice',
    },
    {
      id: 4,
      title: 'Open ended',
    },
  ],
});

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isActiveEl: (state) => state.activeEl,
  },

  mutations: {
    NEXT_EL(state) {
      state.activeEl++;
    },
    PREV_EL(state) {
      state.activeEl--;
    },
    NEXT_ITEM(state) {
      state.activeItem++;
    },
    PREV_ITEM(state) {
      state.activeItem--;
    },
    SET_QUESTIONS_CONTAINER(state) {
      state.questionsContainer = true;
    },
  },
  actions: {
  },
};
