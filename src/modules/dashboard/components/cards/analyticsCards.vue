<template>
  <div class="analytics">
    <div class="bordered sidebar-card" @click="$router.push('/job-codes')">
      <h6>Job Codes</h6>
      <h1 class="mt-2">{{ jobCodeTotal }}</h1>
    </div>

    <div class="bordered sidebar-card" @click="$router.push('/employees')">
      <h6>Total Employees</h6>
      <h1 class="mt-2">{{ employeesTotal }}</h1>
    </div>

    <div class="bordered sidebar-card2" @click="$router.push('/assessment')">
      <h6>Competence Match</h6>
      <h1 class="mt-2">{{ assessmentsTotal }}</h1>
    </div>

    <div class="bordered sidebar-card2" @click="$router.push('/campaigns')">
      <h6>Candidates</h6>
      <h1 class="mt-2">{{ campaignsTotal }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  
  computed: {
    ...mapState("job_codes", {
      jobCodeTotal: (state) => state.dataSetTotal
    }),

    ...mapState("employees", {
      employeesTotal: (state) => state.dataSetTotal
    }),

    ...mapState("assessments", {
      assessmentsTotal: (state) => state.dataSetTotal
    }),

    ...mapState("campaigns", {
      campaignsTotal: (state) => state.dataSetTotal
    }),

  }
}
</script>

<style>

</style>