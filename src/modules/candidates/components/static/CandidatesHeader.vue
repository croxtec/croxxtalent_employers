<template>
  <div class="heaader d-flex justify-content-between align-items-center">
    <div class="header-container ">
      <span
        role="button"
        class="header-item"
        :class="{ 'active-item': activeEl === '1' }"
        @click="switchSection('1')"
        >Active</span
      >
      <span
        class="header-item"
        :class="{ 'active-item': activeEl === '2' }"
        role="button"
        @click="switchSection('2')"
        >Reviewed</span
      >
      <span
        class="header-item"
        :class="{ 'active-item': activeEl === '3' }"
        role="button"
        @click="switchSection('3')"
        >In-Progress</span
      >
      <span
        class="header-item"
        :class="{ 'active-item': activeEl === '4' }"
        role="button"
        @click="switchSection('4')"
        >Rejected</span
      >
      <span
        class="header-item"
        :class="{ 'active-item': activeEl === '5' }"
        role="button"
        @click="switchSection('5')"
        >Withdraw</span
      >
    </div>

    <div class="">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link header-select">
          <span>Select All</span><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeEl: "1",
    };
  },
  methods: {
    switchSection(value) {
      this.activeEl = value;
    },
  },
};
</script>

<style scoped>
.header-container span {
  color: var(--primary-500);
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 25px;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.header-container span.active-item {
  background-color: var(--white);
}


.header-container {
  display: flex;
  /* gap: 20px; */
  background-color: var(--primary-200);
  padding: 5px 5px;
  border-radius: 40px;
  width: max-content;
}

.header-select {
  border: 1px solid var(--primary-200);
  padding: 10px 25px;
  color: var(--primary-500);
  border-radius: 25px;
  display: flex;
  display: inline-flex;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
</style>
