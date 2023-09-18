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
            <tr v-for="(item, index) in results" :key="index" role="button">
              <td>
                <div class="d-flex flex-start" style="gap: 15px">
                  <img
                    :src="
                      item.talent.photo_url === null
                        ? require('@/assets/img/croxxtalent_default_logo.png')
                        : item.talent.photo_url
                    "
                    alt=""
                    style=""
                  />
                  <div class="d-flex flex-column" style="gap: 25px">
                    <div class="td">
                      <h6 class="cell-content" v-text="item.talent.name"></h6>
                      <h6 class="cell-header" v-text="item.talent.email"></h6>
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div class="d-flex flex-column" style="gap: 20px">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        <i-icon icon="icon-park-outline:more" width="20px" />
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                          <span @click="$router.push('/candidate/cv')">
                            <i-icon icon="solar:eye-outline" />
                            Preview CV
                          </span>
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
              </td>
            </tr>
          </table>

          <!-- <table class="table table-centered table-nowrap">
            <tr v-for="(item, index) in results" :key="index" role="button">
              <td @click="getDetails(item)">
                <div class="d-flex flex-start" style="gap: 15px">
                  <img
                    :src="
                      item.talent.photo_url === null
                        ? require('@/assets/img/croxxtalent_default_logo.png')
                        : item.talent.  photo_url
                    "
                    alt=""
                    style=""
                  />
                  <div class="d-flex flex-column" style="gap: 25px">
                    <div class="td">
                      <h6 class="cell-content" v-text="item.talent.name"></h6>
                      <h6 class="cell-header" v-text="item.talent.email">
                      </h6>
                    </div>
                    <div
                      class="d-flex justify-content-between"
                      v-if="details === item.id"
                    >
                      <div class="td">
                        <h6 class="cell-header">Industry</h6>
                        <h6
                          class="cell-content"
                          v-text="item.industry_name"
                        ></h6>
                      </div>
                      <div class="td">
                        <h6 class="cell-header">Experience</h6>
                        <h6
                          class="cell-content"
                          v-text="item.years_of_experience + ' years'"
                        ></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td @click="getDetails(item)">
                <div class="d-flex flex-column" style="gap: 20px">
                  <div class="td">
                    <h6 class="cell-header">No. of Applicants</h6>
                    <h6
                      class="cell-content"
                      v-text="item.total_applications"
                    ></h6>
                  </div>
                  <div class="td" v-if="details === item.id">
                    <h6 class="cell-header">Work type</h6>
                    <h6 class="cell-content" v-text="item.work_type"></h6>
                  </div>
                </div>
              </td>
              <td @click="getDetails(item)">
                <div class="d-flex flex-column" style="gap: 20px">
                  <div class="td">
                    <h6 class="cell-header">Date Created</h6>
                    <h6 class="cell-content">
                      {{ dateStamp(item.created_at) }}
                    </h6>
                  </div>
                  <div class="td" v-if="details === item.id">
                    <h6 class="cell-header">Salary Range</h6>
                    <h6 class="cell-content">
                      {{
                        item.currency_symbol + dollarFilter2(item.min_salary)
                      }}
                      -
                      {{
                        item.currency_symbol + dollarFilter2(item.max_salary)
                      }}
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex flex-column" style="gap: 20px">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <span
                      @click="getDetails(item)"
                      class="status"
                      :class="{ pending: !item.is_published }"
                      style="width: max-content"
                      >{{ item.is_published ? "Published" : "In Review" }}</span
                    >
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        <i-icon icon="icon-park-outline:more" width="20px" />
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                          <i-icon icon="solar:eye-outline" />
                          View
                        </el-dropdown-item>
                        <el-dropdown-item>
                          <i-icon icon="lucide:edit" />
                          Edit</el-dropdown-item
                        >
                        <el-dropdown-item>
                          <i-icon icon="solar:archive-linear" />
                          Archive
                        </el-dropdown-item>

                        <el-dropdown-item class="text-danger">
                          <i-icon icon="fluent:delete-24-regular" />
                          Delete</el-dropdown-item
                        >
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="td" v-if="details === item.id">
                    <span
                      class="status managed"
                      style="width: max-content"
                      v-if="item.is_managed"
                      >Managed By Croxxtalent</span
                    >
                  </div>
                </div>
              </td>
            </tr>
          </table> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sliceHash, dateStamp, dollarFilter2 } from "@/filter";
import { mapState, mapActions } from "vuex";
export default {
  props: {
    campaign: {
      type: Number,
    },
  },
  data() {
    return {
      details: null,
      sliceHash,
      dateStamp,
      dollarFilter2,
      results: [],
    };
  },
  methods: {
    ...mapActions("candidates", ["getCandidates"]),
    getDetails(item) {
      this.details = this.details === item.id ? null : item.id;
    },

    getCampaignCandidates() {
      this.getCandidates(this.campaign).then((res) => {
        console.log(res.data.data, "kkkk");
        this.results = res.data.data;
      });
    },
  },

  watch: {
    campaign: {
      handler: function (newVal) {
        if (newVal) {
          this.getCampaignCandidates();
        }
      },
      immediate: true,
      deep: true
    },
  },

  computed: {
    ...mapState("candidates", {
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
