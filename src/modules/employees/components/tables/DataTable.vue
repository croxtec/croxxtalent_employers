<template>
  <div>
    <div>
      <!-- {{ results }} -->
    </div>
    <div v-if="loading">
      <span>Fetching Data</span>
      <i-icon
        icon="eos-icons:three-dots-loading"
        style="color: var(--primary-500)"
        width="60px"
      />
    </div>
    <span class="error-alert" v-else-if="results.length === 0 && !loading">
      No Data found
    </span>
    <div v-else  class="d-flex flex-column" style="gap: 20px">
      <div class="t-info" id="campaigns-table">
        <div class="t-body d-flex" style="gap: 20px">
          <div>
            <img
              src="https://secretsourcemarketing.com/wp-content/uploads/2021/07/company-icon-02.png"
              alt=""
            />
          </div>
          <div class="t-row">
            <div class="main-table">
              <div class="t-data">
                <h6 class="cell-header">Name</h6>
                <h6 class="cell-content">233</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Email</h6>
                <h6 class="cell-content">233</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Phone Number</h6>
                <h6 class="cell-content">24 July 2021</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Job Title</h6>
                <h6 class="cell-content">233</h6>
              </div>

              <div
                class="t-data d-flex align-items-center justify-content-end"
                role="button"
                @click="details = !details"
              >
                <i-icon icon="ion:ellipsis-horizontal-outline" />
              </div>
            </div>

            <div class="table-details" v-if="details">
              <div class="t-data">
                <h6 class="cell-header">Date of birth</h6>
                <h6 class="cell-content">Energy</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Job Code</h6>
                <h6 class="cell-content">5 Years</h6>
              </div>

              <!-- <div class="t-data">
            <h6 class="cell-header">Work Type</h6>
            <h6 class="cell-content">Full Time</h6>
          </div> -->

              <!-- <div class="t-data">
            <h6 class="cell-header">Salary Range</h6>
            <h6 class="cell-content">$10,000 - $15,000</h6>
          </div>

          <div class="t-data">
            <span class="status managed">Managed By Croxxtalent</span>
          </div> -->
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
      sliceHash,
    };
  },
  computed: {
    ...mapState("employees", {
      results: (state) => state.results,
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style></style>
