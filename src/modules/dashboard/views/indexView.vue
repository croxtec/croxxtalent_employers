<template>
  <div id="dashboard" class="spacer">
    <div class="d-flex flex-column" style="gap:20px">
      <analytics-cards/>
    <div id="analytics-data">
      <analytics-charts id="chartts"/>
      <jobs-opened/>
      <applicants-summary/>
    </div>
    </div>
  </div>
</template>

<script>
import analyticsCards from '../components/cards/analyticsCards.vue'
import JobsOpened from '../components/cards/jobsOpened.vue'
import AnalyticsCharts from '../components/charts/analyticsCharts.vue'
import ApplicantsSummary from '../components/charts/applicantsSummary.vue'
export default {
  components: { analyticsCards, AnalyticsCharts, JobsOpened, ApplicantsSummary },

}
</script>,
    

<style>

</style>