<template>
  <div class="skills spacer">
    <div class="mb-4 d-flex align-items-center justify-content-between">
      <div class="search-area w-auto">
        <i-icon icon="teenyicons:search-outline" class="search-icon"/>
        <input type="search" placeholder="Search assessment">
      </div>
      <div>
        <router-link to="/create-assessment">
          <button class="button primary-btn d-flex align-items-center" style="gap:4px">
            <span> <i-icon icon="material-symbols:add"/> </span>
            <span>Add Assessment</span>
          </button>
        </router-link>
      </div>
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
        <div
          class="d-flex justify-content-center"
          v-else-if="results.length === 0"
        >
          <img src="@/assets/img/empty.svg" alt="" />
        </div>
        <div v-else >
          <el-collapse v-model="activeNames">
            <el-collapse-item
              v-for="(domain, key_domain) in results"
              :key="domain.name"
              :title="domain.name"
              :name="key_domain"
            >
              <div class="skill-header">
                <div class="skills-list" :id="key_domain">
                  <span
                    role="button"
                    @click="switchActive(key_domain, key_core)"
                    :class="{
                      active: assessment[key_domain]?.activeCore === key_core,
                    }"
                    v-for="(core, key_core) in domain.core"
                    :key="key_core"
                  >
                    {{ core.name }}
                  </span>
                </div>
                <div class="arrows">
                  <span
                    class="left-arrow"
                    role="button"
                    @click="scrollButton('left', key_domain)"
                    @mousedown="scrollButton('left', key_domain)"
                  >
                    <i-icon icon="prime:angle-left" width="25px" />
                  </span>
                  <span
                    class="right-arrow"
                    role="button"
                    @click="scrollButton('right', key_domain)"
                    @mousedown="scrollButton('right', key_domain)"
                  >
                    <i-icon icon="prime:angle-right" width="25px" />
                  </span>
                </div>
              </div>
              <div class="manager-data mt-3">
                <div
                  class="skills-info text-center py-3 px-2"
                  v-for="skill in domain.core[assessment[key_domain]?.activeCore]
                    ?.skills"
                  :key="skill.id" >
                <div class="main-skills-content">
                  <span class="assessment-options">
                      <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                              <i-icon icon="icon-park-outline:more" width="20px" />
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item>
                                <span @click="changePublishState(skill, Boolean(skill.is_published))">
                                  <i-icon icon="solar:eye-outline" />
                                  {{ Boolean(skill.is_published) ? 'View' : 'Publish' }}
                                </span>
                                
                              </el-dropdown-item>
                              <el-dropdown-item>
                                <i-icon icon="lucide:edit" />
                                Edit</el-dropdown-item
                              >
                              <el-dropdown-item>
                                <i-icon icon="solar:archive-linear" />
                                Archive
                              </el-dropdown-item>

                              <!-- <el-dropdown-item class="text-danger">
                                <i-icon icon="fluent:delete-24-regular" />
                                Delete</el-dropdown-item
                              > -->
                            </el-dropdown-menu>
                      </el-dropdown>
                  </span>
                  <span
                    class="d-flex align-items-center justify-content-center"
                    style="gap: 4px">
                    <span class="manager-tag" v-text="skill.level"></span>
                    <span class="manager-count">20</span>
                  </span>
                  <h6 class="manager-name mt-2" @click="gotoManagement(skill.id)"
                      role="button" v-text="skill.name"></h6>

                </div>
                    <div class="mt-3">
                      <!-- <button :class="Boolean(skill.is_published) ? 'outline-btn': 'primary-btn'" class="button py-1 px-3" 
                        @click="changePublishState(skill, Boolean(skill.is_published))">
                        {{ Boolean(skill.is_published) ? 'Unpublish' : 'Publish' }}
                      </button> -->
                    </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      activeNames: [0, 1, 2],
      activeEl: 0,
      percentage: 30,
      customColor: "#0040A1",
      assessment: [],
    };
  },

  computed: {
    ...mapState("assessments", {
      loading: (state) => state.loading,
      results: (state) => state.dataSet,
    }),
  },

  methods: {
    ...mapActions("assessments", ["list", "publish", "unPublish"]),

    changePublishState(value, data){
      data ? this.unPublishAssessment(value) : this.publishAssessment(value)
    },

    publishAssessment(value){
      console.log(value);
      this.publish(value.id)
    },

    unPublishAssessment(value){
      console.log(value);
      this.unPublish(value.id)
    },

    handleChange(val) {
      console.log(val);
    },

    switchActive(domainId, item) {
      this.assessment[domainId].activeCore = item;
    },

    scrollButton(direction, domain_container) {
      if (direction === "left") {
        document.getElementById(domain_container).scrollLeft -= 50;
      } else {
        document.getElementById(domain_container).scrollLeft += 50;
      }
    },

    gotoManagement(id) {
      this.$router.push("/manage-assessment/" + id);
    },
  },

  mounted() {
    this.list().then(() => {
      this.results.map(() => this.assessment.push({ activeCore: 0 }));
    });
  },
};
</script>

<style scoped>
.skill-header {
  border-radius: 25px;
  border: 1px solid var(--primary-200);
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  width: 100%;
}

.skills-list {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  overflow-x: scroll;
  gap: 20px;
  max-width: 90%;
  scroll-behavior: smooth;
}

.skills-list span {
  color: #979b9b;
  font-size: 12px;
  font-weight: 400;
  position: relative;
  padding: 10px 15px;
  white-space: nowrap;
}

.skills-list span.active {
  color: var(--dark);
  font-weight: 500;
  position: relative;
}

.skills-list span.active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  border-radius: 50px;
  background-color: var(--primary-500);
  bottom: -2px;
  z-index: 99;
  left: 0;
}

.skills-list::-webkit-scrollbar {
  display: none;
}

.skills-list span:hover {
  color: var(--dark);
}

.arrows {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 10px;
}

.arrows span {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  background: var(--dark);
  color: var(--white);
  border-radius: 50%;
  height: 20px;
  width: 20px;
}

.skills-info {
  border: 1px solid var(--primary-500);
  border-radius: 35px;
  padding: 0px 0px 8px 12px;
}

.main-skills-content {
  /* padding: 25px 15px; */
}
.assessment-options{
  display: flex;
  justify-content: flex-end;
  margin-top: -16px;
  margin-right: 8px;
}
</style>
