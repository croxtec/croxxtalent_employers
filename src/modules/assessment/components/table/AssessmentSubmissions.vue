<template>
  <div>
    <div>
      <div class="search-area w-25 mb-2">
        <i-icon icon="teenyicons:search-outline" class="search-icon" />
        <input type="search" placeholder="Search" />
      </div>
    </div>
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
                    <h6 class="cell-content">{{ item.talent ?  item.talent.name : "null" }}</h6>
                    <h6
                      class="cell-header"
                      v-text="item.talent ? item.talent.job_code.job_title : 'null'"
                    ></h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="td">
                  <h6 class="cell-content">Date</h6>
                  <h6 class="cell-header">{{ timeStamp(item.created_at) }}</h6>
                  <!-- <h6 class="cell-header">Mon, 12/02/ 2023</h6> -->
                </div>
              </td>
              <td class="text-right">
                <button
                  class="button primary-btn py-2"
                  style="width: max-content"
                >
                  Mark Test
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sliceHash, timeStamp } from "@/filter";
import { mapState } from "vuex";
export default {
  data() {
    return {
      details: false,
      sliceHash,
      timeStamp,
    };
  },
  computed: {
    ...mapState("assessments", {
      results: (state) => state.singleDataSet.summaries.data,
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
