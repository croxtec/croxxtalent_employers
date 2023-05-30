<template>
  <div class="spacer">
    <div class="d-flex justify-content-between align-items-center">
      <div class="competences-header-container">
        <span
          role="button"
          class="report-header-item"
          :class="{ 'active-item': activeEl === '1' }"
          @click="switchSection('1')"
          >Basic</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '2' }"
          role="button"
          @click="switchSection('2')"
          >Intermediate</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '3' }"
          role="button"
          @click="switchSection('3')"
          >Expert</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '3' }"
          role="button"
          @click="switchSection('4')"
          >All Completed</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '3' }"
          role="button"
          @click="switchSection('5')"
          >In progress</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '3' }"
          role="button"
          @click="switchSection('6')"
          >Not started</span
        >
      </div>
      <div class="search-area w-25 mb-2">
            <i-icon icon="teenyicons:search-outline" class="search-icon"/>
            <input type="search" placeholder="Search">
          </div>
    </div>
    <manage-competence />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ManageCompetence from "../components/tables/ManageCompetence.vue";
export default {
  components: { ManageCompetence },
  data() {
    return {
      activeEl: "1",
      id: this.$route.params.id
    };
  },

  methods: {
    ...mapActions('competency', ['view']),
    switchSection(value) {},
  },
  beforeMount(){
    this.view(this.id)
  }
};
</script>

<style></style>
