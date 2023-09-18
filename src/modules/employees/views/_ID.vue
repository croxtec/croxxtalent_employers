<template>
  <div class="spacer">
    <div class="tw-grid tw-grid-cols-3 tw-gap-4">
      <div class="tw-border-primary-200 tw-border tw-p-4 tw-rounded-xl">
        <div class="tw-flex tw-flex-col tw-space-y-4">
          <div>
            <img src="" alt="" />
            <div>
              <h4>Shola Asiwaju</h4>
              <span>Wellsite Manager</span>
              <div>
                <span></span>
                <span>4.0</span>
              </div>
            </div>
          </div>

          <div class="tw-bg-primary-100 tw-rounded-3xl tw-p-3">
            <h4 class="tw-font-semibold tw-text-sm">Product Development</h4>
            <span class="tw-flex tw-space-x-1 tw-items-center tw-text-xs tw-font-light">
              <span>Marketing</span>
              <span>
                <i-icon icon="carbon:dot-mark" />
              </span>
              <span>Full Time</span>
            </span>
          </div>

          <div class="tw-bg-primary-100 tw-rounded-xl tw-p-3">
            <div>
              <h6>Stage</h6>
              <span>
                <span>
                    <i-icon icon="" />
                </span>
                <span>Interview</span>
              </span>
            </div>
            <div></div>
          </div>

          <div>
            <button class="tw-border-primary-200 tw-border tw-font-medium tw-text-sm tw-px-6 tw-text-primary-500 tw-py-2 tw-rounded-full">Schedule Interview</button>
            <span>
              <i-icon icon="" />
            </span>
          </div>
        </div>
        <hr class="tw-my-2" />
        <div></div>
      </div>
      <div
        class="tw-col-span-2 tw-border-primary-200 tw-border tw-p-4 tw-rounded-xl"
      >
        Right Side
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    getEmployee() {
      this.$request
        .get(`employers/employee/${this.id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getEmployee();
  },
};
</script>

<style></style>
