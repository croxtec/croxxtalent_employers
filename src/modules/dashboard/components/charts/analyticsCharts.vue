<template>
  <div id="analytics-chart">
    <div class="bordered">
       <div class="d-flex align-items-center justify-content-between">
        <div> 
            <h6>Job Statistics</h6>
            <h6 class="small text-secondary mt-1">Showing Job statistic Jul 19-25</h6>
        </div>
        <div class="competences-header-container">
        <span
          role="button"
          class="report-header-item"
          :class="{ 'active-item': activeEl === '1' }"
          @click="switchSection('1')"
          >Week</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '2' }"
          role="button"
          @click="switchSection('2')"
          >Month</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '3' }"
          role="button"
          @click="switchSection('3')"
          >Year</span
        >
      </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeEl: "1",
    };
  },
  methods: {
    switchSection(value) {
      this.activeEl = value;
    },
  },
};
</script>

<style>

</style>