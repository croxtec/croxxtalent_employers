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
        <div class="table-responsive">
          <table class="table table-centered table-nowrap">
            <tr v-for="(item, index) in results" :key="index" role="button">
              <td @click="getDetails(item)">
                <div class="d-flex flex-start" style="gap: 15px">
                  <img src="@/assets/img/no_avatar.webp" alt="" style="" />
                  <div class="d-flex flex-column" style="gap: 25px">
                    <div class="td">
                      <h6 class="cell-header">Name</h6>
                      <h6 class="cell-content">{{ item.name }}</h6>
                    </div>
                    <div class="td" v-if="details === item.id">
                      <h6 class="cell-header">Date of birth</h6>
                      <h6 class="cell-content">
                        {{ item.birth_date || "No data" }}
                      </h6>
                    </div>
                  </div>
                </div>
              </td>
              <td @click="getDetails(item)">
                <div class="d-flex flex-column" style="gap: 20px">
                  <div class="td">
                    <h6 class="cell-header">Email</h6>
                    <h6 class="cell-content">{{ item.email }}</h6>
                  </div>
                  <div class="td" v-if="details === item.id">
                    <h6 class="cell-header">Job Code</h6>
                    <h6 class="cell-content">
                      {{ item.job_code.job_code }}
                    </h6>
                  </div>
                </div>
              </td>
              <td  @click="getDetails(item)">
                <div class="td">
                  <h6 class="cell-header">Phone Number</h6>
                  <h6 class="cell-content">{{ item.phone }}</h6>
                </div>
              </td>
              <td  @click="getDetails(item)">
                <div class="td">
                  <h6 class="cell-header">Job Title</h6>
                  <h6 class="cell-content">{{ item.job_code.job_title }}</h6>
                </div>
              </td>
              <td>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    <i-icon icon="icon-park-outline:more" width="20px" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
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
      details: null,
      sliceHash,
    };
  },
  methods: {
    getDetails(item){
      this.details = this.details === item.id ? null : item.id
    }
  },
  computed: {
    ...mapState("employees", {
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
  vertical-align: top;
}

td .td {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 4px;
}

td img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  -o-object-fit: cover;
  object-position: top;
  -o-object-position: top;
  border-radius: 50%;
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
