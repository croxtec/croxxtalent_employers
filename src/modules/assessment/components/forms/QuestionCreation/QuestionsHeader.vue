<template>
    <div>
      <div class="assessment-header">
            <span role="button" @click="selectActive(item.id)" class="assessment-item" v-for="item in questionsHeader" :key="item.id"
            :class="{'active-header': activeEl === item.id}">
                <span>{{ item.title }}</span>
                <span v-if="activeEl === item.id"> <i-icon icon="mdi:tick-circle" width="18px"/> </span>
            </span>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  export default {
      data(){
          return {
          }
      },
      methods: {
        selectActive(value) {
            this.$store.commit("assessmentHeader/SELECT_ACTIVE_ELEMENT", value)
        }
      },
      computed: {
          ...mapState('assessmentHeader', {
              activeEl: (state) => state.activeItem,
              questionsHeader: (state) => state.questionsHeader
          })
      }
  }
  </script>
  
  <style scoped>
      .assessment-header {
          display: flex;
          display: inline-flex;
          display: -webkit-flex;
          gap: 25px;  
          /* border: 1px solid var(--primary-200); */
          /* width: 55%; */
          margin: 0 auto;
          border-radius: 35px;
          /* padding: 8px; */
      }
      .assessment-header span.active-header {
          background-color: var(--primary-50);
      }

      .assessment-item {
        color: var(--primary-500);
          font-size: 13px;
          font-weight: 400;
          width: 100%;
          text-align: center;
          padding: 10px 10px;
          border-radius: 30px;
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: center;
        border: 1px solid var(--primary-500);
      }
  </style>