<template>
  <div>
    <form action="" @submit.prevent="" class="tw-flex tw-flex-col tw-space-y-4">
      <div>
        <label for="" class="tw-text-gray2 tw-text-[12.7px]">
          Old Password<span class="tw-text-red-500">*</span>
        </label>
        <input type="text" class="tw-py-3 tw-px-4 tw-text-[14px]" />
      </div>

      <div>
        <label for="" class="tw-text-gray2 tw-text-[12.7px]">
          New Password<span class="tw-text-red-500">*</span>
        </label>
        <input type="text" class="tw-py-3 tw-px-4 tw-text-[14px]" />
      </div>

      <div>
        <label for="" class="tw-text-gray2 tw-text-[12.7px]">
          Confirm New Password<span class="tw-text-red-500">*</span>
        </label>
        <input type="text" class="tw-py-3 tw-px-4 tw-text-[14px]" />
      </div>

      <div class="tw-flex tw-space-x-2 tw-mb-10">
        <input type="checkbox" class="tw-w-auto" />
        <label for="" class="tw-text-gray4 tw-text-[12.7px] tw-font-medium">
          Logout all active sessions
        </label>
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
export default {};
</script>

<style></style>
