<template>
  <div>
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
      <div
        class="d-flex justify-content-center"
        v-else-if="results.length === 0"
      >
        <img src="@/assets/img/empty.svg" alt="" />
      </div>
      <div v-else class="d-flex flex-column" style="gap: 20px">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap">
            <tr v-for="item in results" :key="item.id">
              <td>
                <div class="d-flex align-items-center" style="gap: 15px">
                  <img
                    src="https://menofvalue.com/wp-content/uploads/2015/04/bigstock-Skeptical-74315989-e1438791711725.jpg"
                    alt=""
                    style=""
                  />
                  <div class="td">
                    <h6 class="cell-content" v-text="item.talent ? item.talent.name : 'no data' "></h6>
                    <h6
                      class="cell-header"
                      v-text="item.talent ? item.talent.job_code.job_title : 'no data'"
                    ></h6>
                  </div>
                </div>
              </td>
              <!-- <td>
                  <div class="td">
                    <h6 class="cell-content">Level</h6>
                    <h6 class="cell-header">
                        <span class="level basic">Basic</span>
                    </h6>
                  </div>
                </td> -->

              <td>
                <div class="td">
                  <h6 class="cell-content">Score</h6>
                  <h6 class="cell-header" v-text="item.info.score_average"></h6>
                </div>
              </td>

              <td>
                <div class="td">
                  <h6 class="cell-content">Asessments</h6>
                  <h6
                    class="cell-header"
                    v-text="item.info.total_assesments"
                  ></h6>
                </div>
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
    ...mapState("competency", {
      results: (state) => state.singleDataSet,
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
  border-bottom: 1px solid var(--primary-300) !important;
  border-top: 1px solid var(--primary-300) !important;
  /* padding: 5px; */
  background: var(--accent-color);
  padding: 20px 25px;
  font-size: 0.8rem;
}

td .td {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 4px;
}

td img {
  width: 60px;
  height: 60px;
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
