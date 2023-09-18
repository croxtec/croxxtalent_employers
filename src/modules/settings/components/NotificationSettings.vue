<template>
  <div>
    <div>
      <h5 class="tw-font-semibold tw-text-lg">Activity</h5>
      <div v-for="item in settings.slice(0, 2)" :key="item?.id" class="tw-flex tw-space-x-3 tw-items-center tw-mt-2">
        <span class="tw-text-primary-500">
          <i-icon
            :icon="
              item?.status ? 'ic:sharp-toggle-off' : 'ic:outline-toggle-on'
            "
            width="37px"
          />
        </span>
        <span class="tw-text-sm">{{ item?.description }}</span>
      </div>
    </div>

    <div class="tw-mt-5">
      <h5 class="tw-font-semibold tw-text-lg">Application</h5>
      <div v-for="item in settings.slice(2, 5)" :key="item?.id" class="tw-flex tw-space-x-3 tw-items-center tw-mt-2">
        <span class="tw-text-primary-500">
          <i-icon
            :icon="
              item?.status ? 'ic:sharp-toggle-off' : 'ic:outline-toggle-on'
            "
            width="37px"
          />
        </span>
        <span class="tw-text-sm">{{ item?.description }}</span>
      </div>
    </div>

    <div class="tw-mt-10 tw-flex tw-space-x-4 tw-justify-center">
      <button class="tw-font-medium tw-capitalize tw-text-[14px] tw-border tw-border-primary-500 tw-px-6 tw-py-2 tw-rounded-3xl tw-text-primary-500">reset</button>
      <button class="tw-bg-primary-500 tw-font-medium tw-capitalize tw-text-[14px] tw-px-6 tw-py-2 tw-text-white tw-rounded-3xl">save changes</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: [
        {
          id: 1,
          description: "Send emails to me when employer sends an invitation.",
          status: true,
        },
        {
          id: 2,
          description: "Send emails to me when my account is logged into.",
          status: false,
        },
        {
          id: 3,
          description: "News and announcements.",
          status: false,
        },
        {
          id: 4,
          description: "Weekly product updates.",
          status: false,
        },
        {
          id: 5,
          description: "Weekly blog digest",
          status: true,
        },
      ],
    };
  },
};
</script>

<style></style>
