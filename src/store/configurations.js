/* eslint-disable no-undef */
import $request from "@/https/axios";

// import toastify from "toastify-js";

const getDefaultState = () => {
  return {
    // timezones: [],
    countries: [],
    states: [],
    course_of_studies: [],
    certification_courses: [],
    competence: [],
    industries: [],
    job_titles: [],
    degrees: [],
    languages: [],
    skills: null,
    domains: [],
    cores: null,
    delivery_type: [
      {
        id: 1,
        name: 'Quiz',
        value: 'quiz'
      },
      {
        id: 2,
        name: 'Classroom',
        value: 'classroom'
      },
      {
        id: 3,
        name: 'On the Job',
        value: 'on-the-job'
      },
      {
        id: 4,
        name: 'Assessment',
        value: 'assessment'
      },
      {
        id: 5,
        name: 'Experience',
        value: 'experience'
      },
      {
        id: 6,
        name: 'Exam',
        value: 'exam'
      },
      {
        id: 7,
        name: 'External',
        value: 'external'
      }
    ],
    categories: [
      {
        id: 1, 
        name: 'Generic',
        value: 'generic'
      },
      {
        id: 2, 
        name: 'Job Specific',
        value: 'job specific'
      },
      {
        id: 3, 
        name: 'HSE',
        value: 'hse'
      },
      {
        id: 4, 
        name: 'Vetting',
        value: 'vetting'
      },
    ],
    levels: [
      {
        id: 1, 
        name: 'Beginner',
        value: 'beginner'
      },
      {
        id: 2, 
        name: 'Intermediate',
        value: 'intermediate'
      },
      {
        id: 3, 
        name: 'Advanced',
        value: 'advanced'
      },
      {
        id: 4, 
        name: 'Expert',
        value: 'expert'
      }
    ]
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {},

  mutations: {
    SET_COUNTRIES_DATA(state, payload) {
      state.countries = payload;
    },
    SET_COURSES(state, payload) {
      state.course_of_studies = payload;
    },
    SET_INDUSTRIES_DATA(state, payload) {
      state.industries = payload;
    },
    SET_JOB_TITLES(state, payload) {
      state.job_titles = payload;
    },
    SET_DEGREES(state, payload) {
      state.degrees = payload;
    },
    SET_DOMAINS(state, payload) {
      state.domains = payload;
    },
    SET_CORES(state, payload) {
      state.cores = payload;
    },
    SET_SKILLS(state, payload) {
      state.skills = payload;
    },
  },
  actions: {
    // get Countries
    async getCountries({ commit }) {
      try {
        let response = await $request.get("settings/countries");
        let responsePayload = response.data.data;
        commit("SET_COUNTRIES_DATA", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    async getDomains ({commit}) {
      try {
        let response = await $request.get("settings/competence");
        console.log(response.data.data);
        let responsePayload = response.data.data;
        commit("SET_DOMAINS", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    async getCore({commit}, domain) {
      try {
        let response = await $request.get(`settings/competence/core/${domain}`);
        console.log(response.data.data);
        let responsePayload = response.data.data.core;
        commit("SET_CORES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    async getSkills({commit}, core) {
      try {
        let response = await $request.get(`settings/competence/skill/${core}`);
        console.log(response.data.data);
        let responsePayload = response.data.data;
        commit("SET_SKILLS", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

   

    // get Countries
    async getCourses({ commit }) {
      try {
        let response = await $request.get("settings/course-of-studies");
        let responsePayload = response.data.data;
        commit("SET_COURSES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // get Industries
    async getIndustries({ commit }) {
      try {
        let response = await $request.get("settings/industries");
        let responsePayload = response.data.data;
        commit("SET_INDUSTRIES_DATA", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // get Job Titles
    async getJobTitles({ commit }) {
      try {
        let response = await $request.get("settings/job-titles");
        let responsePayload = response.data.data;
        commit("SET_JOB_TITLES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // get Degrees
   async  getDegrees({ commit }) {
      try {
        let response = await $request.get("settings/degrees");
        let responsePayload = response.data.data;
        commit("SET_DEGREES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
