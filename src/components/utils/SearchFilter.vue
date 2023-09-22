<template>
  <div>
    <div class="tw-relative">
      <div
        class="tw-shadow-lg tw-px-5 tw-py-3 tw-border tw-rounded-full tw-flex tw-items-center tw-space-x-3"
      >
        <i-icon icon="uil:search" class="tw-text-light" width="22px" />
        <input type="text" class="tw-border-0 tw-border-b tw-rounded-none" />
        <span @click="openFilter">
          <i-icon
            icon="solar:tuning-3-bold"
            class="tw-text-light"
            role="button"
            width="22px"
          />
        </span>
        <button class="primary-btn tw-px-5 tw-py-3 tw-rounded-full tw-text-xs">
          Search
        </button>
      </div>
      <div v-if="filterBody">
        <div
          class="tw-absolute tw-w-full tw-px-6 tw-py-5 tw-border tw-rounded-[40px] tw-bg-white tw-flex tw-items-center tw-space-x-3"
        >
          <div class="tw-w-full">
            <slot name="filterBody"></slot>
            <div
              class="tw-flex tw-space-x-2 tw-justify-end tw-items-center tw-full tw-mt-4"
            >
              <button
                class="primary-btn tw-px-8 tw-py-3 tw-rounded-full tw-text-xs tw-border tw-border-primary-500"
              >
                Apply
              </button>
              <button
                class="tw-border tw-border-primary-500 tw-px-8 tw-py-3 tw-text-primary-500 tw-font-medium tw-rounded-full tw-text-xs"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBody: false,
    };
  },

  methods: {
    openFilter() {
      this.filterBody = !this.filterBody;
    },
  },
};
</script>

<style></style>
