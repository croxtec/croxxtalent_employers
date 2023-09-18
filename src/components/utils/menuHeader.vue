<template>
  <div class="heaader d-flex justify-content-between align-items-center">
    <div class="header-container">
      <span
        v-for="item in options"
        :key="item.id"
        role="button"
        class="header-item tw-capitalize"
        :class="{ 'active-item': item.active }"
        @click="makeActive(item)"
        >{{ item.title }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
    },
  },
  data() {
    return {
      selectedCampaign: "",
    };
  },
  methods: {
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
    selectedCampaign: {
      handler(val) {
        if (val !== "") {
          this.$emit("getCandidates", val);
        } else {
          this.$emit("getCandidates", "");
        }
      },
      immediate: true,
    },

    options: {
      handler(val) {
        let active = val.find((item) => item.active);
        this.$emit("setActive", active);
      },
      deep: true,
    },
  },

  beforeMount() {
  },

  computed: {
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
