<template>
  <div>
    <div class="table-responsive">
      <table class="table table-centered table-nowrap">
        <tr v-for="(item, index) in results" :key="index" role="button">
          <td @click="getDetails(item)">
            <div class="d-flex flex-start" style="gap: 15px">
              <img src="https://secretsourcemarketing.com/wp-content/uploads/2021/07/company-icon-02.png" alt="" style="" />
              <div class="d-flex flex-column" style="gap: 25px">
                <div class="td">
                  <h6 class="cell-header">Well head Engineer</h6>
                  <h6 class="cell-content">
                    Schlumberger
                    <i-icon icon="material-symbols:circle" width="5px" />
                    UAE
                    <i-icon icon="material-symbols:circle" width="5px" />
                    Full Time
                  </h6>
                </div>
                <div class="d-flex justify-content-between" v-if="details === item.id">
                  <div class="td">
                    <h6 class="cell-header">Industry</h6>
                    <h6 class="cell-content">Energy</h6>
                  </div>
                  <div class="td">
                    <h6 class="cell-header">Experience</h6>
                    <h6 class="cell-content">5 years</h6>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td @click="getDetails(item)">
            <div class="d-flex flex-column" style="gap: 20px">
              <div class="td">
                <h6 class="cell-header">No. of Applicants</h6>
                <h6 class="cell-content">233</h6>
              </div>
              <div class="td" v-if="details === item.id">
                <h6 class="cell-header">Work type</h6>
                <h6 class="cell-content">Full Time</h6>
              </div>
            </div>
          </td>
          <td @click="getDetails(item)">
            <div class="d-flex flex-column" style="gap: 20px">
              <div class="td">
                <h6 class="cell-header">Date Created</h6>
                <h6 class="cell-content">24 July, 2021</h6>
              </div>
              <div class="td" v-if="details === item.id">
                <h6 class="cell-header">Salary Range</h6>
                <h6 class="cell-content">$10k - $15k</h6>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex flex-column" style="gap: 20px">
              <div class="d-flex justify-content-between align-items-center">
                <span  @click="getDetails(item)" class="status pending" style="width: max-content"
                >In Review</span
              >
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
              </div>
              <div class="td" v-if="details === item.id">
                <span class="status managed" style="width: max-content"
                  >Managed By Croxxtalent</span
                >
              </div>
            </div>
          </td>
          <!-- <td>
            <div class="d-flex flex-column" style="gap: 20px">
              
              
            </div>
          </td> -->
        </tr>
      </table>
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
    getDetails(item) {
      this.details = this.details === item.id ? null : item.id;
    },
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
