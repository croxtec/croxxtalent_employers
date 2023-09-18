<template>
  <div class="spacer">
    <div class="tw-flex tw-flex-col tw-space-y-6">
      <div class="tw-border tw-border-primary-gray2 tw-flex tw-rounded-2xl">
        <div
          class="tw-p-4 tw-w-3/12 tw-text-center tw-flex tw-justify-center tw-items-center"
        >
          <div>
            <h3
              class="tw-font-semibold tw-text-[17px] tw-text-center tw-mb-6 tw-capitalize"
            >
              current plan
            </h3>
            <h1 class="tw-text-[50px] tw-font-semibold">
              $0.<span class="tw-text-xs">00</span
              ><span class="tw-text-xs">/month</span>
            </h1>
            <h6 class="tw-font-[500] tw-mt-2 tw-text-sm tw-capitalize">
              payment due date
            </h6>
            <h6 class="tw-text-[12px] tw-text-gray2 tw-text-normal">
              February 25, 2023
            </h6>
          </div>
        </div>

        <div class="tw-border-l tw-p-4">
          <div>
            <h6 class="tw-text-[15px] tw-font-medium">
              Access these features when you get to subscribe to this <br />
              package.
            </h6>
            <ul class="tw-flex tw-flex-col tw-space-y-3 tw-mt-4">
              <li
                v-for="item in access"
                :key="item.id"
                class="tw-text-[13px] tw-items-center tw-flex tw-space-x-1"
              >
                <span>
                  <i-icon
                    icon="mdi:tick-circle"
                    class="tw-text-secondary-500"
                    width="16px"
                  />
                </span>
                <span>{{ item?.title }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="tw-flex tw-space-x-6">
        <div
          class="tw-border tw-w-full tw-border-primary-gray2 tw-rounded-2xl tw-p-6"
        >
          <div>
            <span
            class="tw-bg-primary-500 tw-block tw-w-full tw-p-3 tw-text-2xl tw-rounded-lg tw-text-white tw-text-center tw-capitalize tw-font-medium"
            >premium plan</span
          >
          </div>
          <div class="tw-mt-3">
            <h1 class="tw-text-[50px] tw-font-[500]">
              $100.<span class="tw-text-xs">00</span
              ><span class="tw-text-xs">/Monthly</span>
            </h1>

            <ul class="tw-flex tw-flex-col tw-space-y-3 tw-mt-4">
              <li
                v-for="item in access"
                :key="item.id"
                class="tw-text-[13px] tw-items-center tw-flex tw-space-x-1"
              >
                <span>
                  <i-icon
                    icon="mdi:tick-circle"
                    class="tw-text-secondary-500"
                    width="16px"
                  />
                </span>
                <span>{{ item?.title }}</span>
              </li>
            </ul>

            <div class="tw-mt-6">
                <button class="tw-bg-primary-500 tw-font-medium tw-capitalize tw-text-[14px] tw-px-6 tw-py-2 tw-text-white tw-rounded-3xl">upgrade plan</button>
            </div>
          </div>
        </div>
       
        <div
          class="tw-border tw-w-full tw-border-primary-gray2 tw-rounded-2xl tw-p-6"
        >
          <div>
            <span
            class="tw-bg-primary-500 tw-block tw-w-full tw-p-3 tw-text-2xl tw-rounded-lg tw-text-white tw-text-center tw-capitalize tw-font-medium"
            >advanced plan</span
          >
          </div>
          <div class="tw-mt-3">
            <h1 class="tw-text-[50px] tw-font-[500]">
              $100.<span class="tw-text-xs">00</span
              ><span class="tw-text-xs">/Monthly</span>
            </h1>

            <ul class="tw-flex tw-flex-col tw-space-y-3 tw-mt-4">
              <li
                v-for="item in access"
                :key="item.id"
                class="tw-text-[13px] tw-items-center tw-flex tw-space-x-1"
              >
                <span>
                  <i-icon
                    icon="mdi:tick-circle"
                    class="tw-text-secondary-500"
                    width="16px"
                  />
                </span>
                <span>{{ item?.title }}</span>
              </li>
            </ul>

            <div class="tw-mt-6">
                <button class="tw-bg-primary-500 tw-font-medium tw-capitalize tw-text-[14px] tw-px-6 tw-py-2 tw-text-white tw-rounded-3xl">upgrade plan</button>
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
      access: [
        {
          id: 1,
          title: "Employer dashboard",
        },
        {
          id: 2,
          title: "Create Campaigns",
        },
        {
          id: 3,
          title: "Search for talent",
        },
        {
          id: 4,
          title: "View talent's CV",
        },
        {
          id: 5,
          title: "Download talent's CV",
        },
        {
          id: 6,
          title: "Invite talent",
        },
      ],
    };
  },
};
</script>

<style></style>
