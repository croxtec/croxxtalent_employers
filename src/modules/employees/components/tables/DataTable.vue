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
    <div v-else>
      <span class="error-alert" v-if="error">
      {{ error }}
    </span>
      <span class="error-alert" v-else-if="results.length === 0">
      No Data found
    </span>
    <div v-else class="d-flex flex-column" style="gap: 20px">
      <div class="t-info" id="campaigns-table" v-for="(item, index) in results" :key="index">
        <div class="t-body d-flex" style="gap: 20px">
          <div>
            <img
              src="@/assets/img/no_avatar.webp"
              alt=""
            />
          </div>
          <div class="t-row">
            <div class="main-table">
              <div class="t-data">
                <h6 class="cell-header">Name</h6>
                <h6 class="cell-content">{{ item.name }}</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Email</h6>
                <h6 class="cell-content">{{ item.email }}</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Phone Number</h6>
                <h6 class="cell-content">{{ item.phone }}</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Job Title</h6>
                <h6 class="cell-content">{{ item.job_code.job_title }}</h6>
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
                <h6 class="cell-content">{{ item.birth_date || 'No data' }}</h6>
              </div>

              <div class="t-data">
                <h6 class="cell-header">Job Code</h6>
                <h6 class="cell-content">{{ item.job_code.job_code }}</h6>
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
      sliceHash,
    };
  },
  computed: {
    ...mapState("employees", {
      results: (state) => state.results,
      loading: (state) => state.loading,
      error: (state) => state.error
    }),
  },
};
</script>

<style></style>
