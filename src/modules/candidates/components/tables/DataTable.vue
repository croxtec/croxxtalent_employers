<template>
  <div>
    <div class="table-responsive">
      <table class="table table-centered table-nowrap">
        <tr v-for="item in 6" :key="item">
          <td @click="getDetails(item)" role="button">
            <div class="d-flex flex-column" style="gap: 20px">
              <div class="td">
                <h6 class="cell-header">Name</h6>
                <h6 class="cell-content">233</h6>
              </div>
              <div class="td" v-if="details === item">
                <h6 class="cell-header">Date & Time</h6>
                <h6 class="cell-content">5 Years</h6>
              </div>
            </div>
          </td>
          <td @click="getDetails(item)" role="button">
            <div class="d-flex flex-column" style="gap: 20px">
              <div class="td">
                <h6 class="cell-header">Email</h6>
                <h6 class="cell-content">24 July 2021</h6>
              </div>
              <div class="td" v-if="details === item">
                <h6 class="cell-header">Status</h6>
                <h6 class="cell-content">5 Years</h6>
              </div>
            </div>
          </td>
          <td @click="getDetails(item)" role="button">
            <div class="td">
              <h6 class="cell-header">Phone</h6>
              <h6 class="cell-content">24 July 2021</h6>
            </div>
          </td>
          <td @click="getDetails(item)" role="button">
            <div class="td">
              <h6 class="cell-header">Job Title</h6>
              <h6 class="cell-content">24 July 2021</h6>
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
      this.details = this.details === item ? null : item;
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
