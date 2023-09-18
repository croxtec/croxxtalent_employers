<template>
  <div>
    <div class="tw-mb-8">
      <div class="tw-mx-auto tw-w-[100px] tw-border-2 tw-border-primary-500 tw-h-[100px] tw-rounded-full tw-relative">
        <img
          class="tw-rounded-full"
          src="@/assets/img/no_avatar.webp"
          alt=""
        />
        <span role="button" class="tw-absolute tw-text-white tw-bottom-0 tw-flex tw-items-center tw-justify-center tw-right-0 tw-w-[30px] tw-h-[30px] tw-bg-secondary-500 tw-rounded-full">
          <i-icon icon="mdi:edit-outline" width="20px" />
        </span>
      </div>
      <div class="tw-text-center tw-mt-1">
        <span class="tw-text-[14px] tw-text-gray2"
          >Upload a profile picture</span
        >
      </div>
    </div>
    <form action="" @submit.prevent="" class="tw-flex tw-flex-col tw-space-y-4">
      <div class="tw-flex tw-space-x-4">
        <div>
          <label for="" class="tw-text-gray2 tw-text-[12.7px]">
            First Name<span class="tw-text-red-500">*</span>
          </label>
          <input type="text" class="tw-py-3 tw-px-4 tw-text-[14px]" />
        </div>

        <div>
          <label for="" class="tw-text-gray2 tw-text-[12.7px]">
            Last Name<span class="tw-text-red-500">*</span>
          </label>
          <input type="text" class="tw-py-3 tw-px-4 tw-text-[14px]" />
        </div>
      </div>

      <div>
        <label for="" class="tw-text-gray2 tw-text-[12.7px]">
          Email Address<span class="tw-text-red-500">*</span>
        </label>
        <input type="email" class="tw-py-3 tw-px-4 tw-text-[14px]" />
      </div>

      <div>
        <label for="" class="tw-text-gray2 tw-text-[12.7px]">
          Phone Number<span class="tw-text-red-500">*</span>
        </label>
        <vue-tel-input
          v-model="phone"
          autocomplete="off"
          class="tw-py-2 tw-px-4 tw-text-[14px]"
        ></vue-tel-input>
      </div>

      <div class="tw-mt-8 tw-flex tw-justify-center">
        <button
          class="tw-bg-primary-500 tw-font-medium tw-capitalize tw-text-[14px] tw-px-6 tw-py-3 tw-text-white tw-rounded-3xl"
        >
          save changes
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
    };
  },
};
</script>

<style></style>
