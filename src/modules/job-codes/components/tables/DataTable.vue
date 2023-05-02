<template>
  <div>
    <div>
      <!-- {{ results }} -->
    </div>
    <div v-if="loading">
      <span>Retrieving Data</span>
      <i-icon
        icon="eos-icons:three-dots-loading"
        style="color: var(--primary-500)"
        width="60px"
      />
    </div>
    
    <div v-else>
      <span class="error-alert" v-if="error">
      {{ error }}
    </span>
      <span class="error-alert" v-else-if="results.length === 0">
      No Data found
    </span>
      <div v-else class="d-flex flex-column" style="gap: 20px">
        <div class="t-info" id="campaigns-table" v-for="item in results" :key="item.id">
        <div class="t-body">
          <div class="t-row">
            <div class="main-table">
              <div class="t-data">
                <h6 class="cell-header">Id</h6>
                <h6 class="cell-content">{{ item.id }}</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Job Title</h6>
                <h6 class="cell-content">{{ item.job_title }}</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Job Code</h6>
                <h6 class="cell-content">{{ item.job_code }}</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Job Description</h6>
                <h6 class="cell-content">{{ sliceHash(item.description) }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sliceHash } from "@/filter";
import { mapState } from "vuex";
export default {
  data() {
    return {
      details: false,
      sliceHash
    };
  },
  computed: {
    ...mapState("job_codes", {
      results: (state) => state.results,
      loading: (state) => state.loading,
      error: (state) => state.error
    }),
  },
};
</script>

<style></style>
 