<template>
  <div class="spacer">
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
    <div class="skills">
      <!-- <div>
        {{ results }}
        {{ data}}
      </div> -->
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="item in results" :key="item" :title="item" name="1">
        <div class="skill-header">
          <span v-for="item in skillsArr" :key="item">{{ item }}</span>
        </div>
        <div class="manager-data mt-3">
          <div class="manager-info text-center" role="button" @click="$router.push('/manage-assessment')">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center" role="button" @click="$router.push('/manage-assessment')">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center" role="button" @click="$router.push('/manage-assessment')">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center" role="button" @click="$router.push('/manage-assessment')">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center" role="button" @click="$router.push('/manage-assessment')">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center" role="button" @click="$router.push('/manage-assessment')">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center" role="button" @click="$router.push('/manage-assessment')">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center" role="button" @click="$router.push('/manage-assessment')">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>
        </div>
      </el-collapse-item>
      
    </el-collapse>
  </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      activeNames: ["1", "2"],
      customColor: "#0040A1",
      percentage: 30,
      skillsArr: [
        "Cementing jobs",
        "Stimulation equipment",
        "Auxiliary equipment",
        "Cementing equipment",
        "Down-holes tools",
        "Pressure jobs",
      ],
    };
  },
  methods: {
    ...mapActions('assessments', ['list']),
    handleChange(val) {
      console.log(val);
    },
  },
  beforeMount(){
    this.list()
  },
  computed:{
    ...mapState("assessments", {
      results: (state) => Object.keys(state.dataSet),
      data: (state) => state.dataSet
    })
  }
};
</script>

<style></style>
