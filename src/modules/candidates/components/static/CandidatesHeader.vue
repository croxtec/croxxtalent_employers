<template>
  <div class="heaader d-flex justify-content-between align-items-center">
    <div class="header-container">
      <span
        v-for="item in options"
        :key="item.id"
        role="button"
        class="header-item"
        :class="{ 'active-item': item.active }"
        @click="makeActive(item)"
        >{{ item.title }}</span
      >
    </div>

    <div class="">
      <v-select label="title" v-model="selectedCampaign" :options="results" placeholder="Select Campaign">
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <i-icon icon="radix-icons:caret-down" width="24px"/>
          </span>
        </template></v-select
      >
      <!-- <el-dropdown trigger="click">
        <span class="el-dropdown-link header-select">
          <span>Select Campaign</span
          ><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in results" :key="item.id">
            <span class="w-100 d-block" @click="selectCampaign(item)">
              {{ item.title }}
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          id: 1,
          title: "Active",
          active: true,
        },
        {
          id: 2,
          title: "Reviewed",
          active: false,
        },
        {
          id: 3,
          title: "In Progress",
          active: false,
        },
        {
          id: 4,
          title: "Rejected",
          active: false,
        },
        {
          id: 5,
          title: "Withdraw",
          active: false,
        },
      ],
      selectedCampaign: ""
    };
  },
  methods: {
    ...mapActions("campaigns", ["list"]),
    makeActive(selectedItem) {
      // Mark the clicked item as active
      this.options.forEach((item) => {
        item.active = item === selectedItem;
      });
    },

    selectCampaign(e) {
      console.log(e);
    },
  },

  watch: {
    selectedCampaign:{
      handler(val) {
        this.$emit("getCandidates", val)
      },
      immediate: true,
      deep: true
    },

    options:{
      handler(val) {
        let active = val.find(item => item.active)
        this.$emit('setTitle', active)
      },
      deep: true
    }
  },

  beforeMount() {
    this.list();
  },

  computed: {
    ...mapState("campaigns", {
      results: (state) => state.results,
      loading: (state) => state.loading,
      error: (state) => state.error,
    }),
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
