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
      <div class="d-flex justify-content-center" v-else-if="results.length === 0">
        <img src="@/assets/img/empty.svg" alt="">
      </div>
      <div v-else class="d-flex flex-column" style="gap: 20px">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap">
            <tr v-for="item in results" :key="item.id">
              <td>
                <div>
                  <h6 class="cell-header">Id</h6>
                  <h6 class="cell-content">{{ item.id }}</h6>
                </div>
              </td>
              <td>
                <div>
                  <h6 class="cell-header">Job Title</h6>
                  <h6 class="cell-content">{{ item.job_title }}</h6>
                </div>
              </td>
              <td>
                <div>
                  <h6 class="cell-header">Job Code</h6>
                  <h6 class="cell-content">{{ item.job_code }}</h6>
                </div>
              </td>
              <td>
                <div>
                  <h6 class="cell-header">Job Description</h6>
                  <h6 class="cell-content">
                    {{ sliceHash(item.description) }}
                  </h6>
                </div>
              </td>
              <td>
                <div>
                  <h6 class="cell-header">Manager</h6>
                  <h6 class="cell-content">{{ "No data" }}</h6>
                </div>
              </td>
              <td>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    <i-icon icon="icon-park-outline:more" width="20px" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      >Action 1</el-dropdown-item
                    >
                    <el-dropdown-item
                      >Action 2</el-dropdown-item
                    >
                    <el-dropdown-item
                      >Action 3</el-dropdown-item
                    >
                   
                  </el-dropdown-menu>
                </el-dropdown>
                
              </td>
            </tr>
          </table>
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
    ...mapState("job_codes", {
      results: (state) => state.results,
      loading: (state) => state.loading,
      error: (state) => state.error,
    }),
  },
};
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 15px;
  width: 100%;
}
th {
  background-color: var(--primary-500) !important;
  color: white;
}
th,
td {
  /* width: 100%; */
  border-bottom: 1px solid var(--primary-300);
  border-top: 1px solid var(--primary-300);
  /* padding: 5px; */
  background: var(--accent-color);
  padding: 20px 25px;
  font-size: 0.8rem;
}

td div {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 4px;
}

th:nth-child(1) {
  border-radius: 25px 0 0 25px;
}

th:last-child {
  border-radius: 0 25px 25px 0;
}

td:nth-child(1) {
  border-radius: 25px 0 0 25px;
  border-left: 1px solid var(--primary-300);
}

td:last-child {
  border-radius: 0 25px 25px 0;
  border-right: 1px solid var(--primary-300);
}
</style>
