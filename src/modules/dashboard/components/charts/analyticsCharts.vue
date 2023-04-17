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
       <hr>
       <div class="chart-area">
        <div class="actual-chart">
            actual-chart
        </div>
        <div class="job-applied bordered">
          <div class="d-flex align-items-center justify-content-between">
            <h6>Job applied</h6>
            <span class="bordered-icon"> <i-icon icon="ph:eye" /> </span>
          </div>
          <div  class="mt-2">
            <h1 class="card-number">654</h1>
            <span class="text-secondary small d-flex align-items-center" style="gap:10px">
              <span>This week</span>
              <span class="text-danger">5.6%</span>
              <span> <i-icon class="text-danger" icon="mdi:caret-down" width="23px"/> </span>
            </span>
          </div>
        </div>
        <div class="job-views bordered">
          <div class="d-flex align-items-center justify-content-between">
            <h6>Job views</h6>
            <span class="bordered-icon"> <i-icon icon="ph:eye" /> </span>
          </div>
          <div  class="mt-2">
            <h1 class="card-number">654</h1>
            <span class="text-secondary small d-flex align-items-center" style="gap:10px">
              <span>This week</span>
              <span class="text-success">5.6%</span>
              <span> <i-icon class="text-success" icon="mdi:caret-up" width="23px"/> </span>
            </span>
          </div>
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

<style scoped>
.job-applied h6, .job-views h6 {
  font-size: 15px;
  font-weight: 600;
}
  .chart-area {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    gap: 20px;
  }

  .chart-area .actual-chart {
    grid-row: 1 / span 2;
  }

  .bordered-icon {
    background: var(--accent-warning);
    color: var(--white);
    width: 30px;
    height: 30px;
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    place-items: center;
    border-radius: 20px;
  }
</style>