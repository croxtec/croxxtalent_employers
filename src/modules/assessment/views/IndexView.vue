<template>
  <div class="spacer">
    <div>
      <div class="search-field">
        <i-icon icon="" />
        
      </div>
    </div>
    <div class="skills">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Well Services" name="1">
        <div class="skill-header">
          <span v-for="item in skillsArr" :key="item">{{ item }}</span>
        </div>
        <div class="manager-data mt-3">
          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
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
      <el-collapse-item title="Rig Operations" name="2">
        <div class="skill-header">
          <span v-for="item in skillsArr" :key="item">{{ item }}</span>
        </div>
        <div class="manager-data mt-3">
          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
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
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style></style>
