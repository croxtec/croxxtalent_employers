<template>
  <div class="spacer">
    <div class="tw-flex tw-justify-center">
      <menu-header :options="options" @setActive="setActive" />
    </div>
    <div
      class="tw-mt-6 tw-border tw-border-primary-100 tw-rounded-2xl tw-px-28 tw-py-8 tw-w-9/12 tw-mx-auto"
    >
      <div class="tw-text-center tw-mb-9">
        <h3 class="tw-capitalize tw-mb-0 tw-font-semibold tw-text-xl">
          {{ activeEl.header || "profile settings" }}
        </h3>
        <span class="tw-text-gray2 tw-text-[13px]">{{
          activeEl.description || ""
        }}</span>
      </div>
      <profile-settings
        v-if="activeEl.title == 'profile' || Object.keys(activeEl).length === 0"
      />
      <security-settings v-if="activeEl.title == 'security'" />
      <notification-settings v-if="activeEl.title == 'notifications'" />
      <div
        v-if="
          Object.keys(activeEl).length &&
          activeEl.title !== 'profile' &&
          activeEl.title !== 'security' &&
          activeEl.title !== 'notifications'
        "
      >
        Coming Soon
      </div>
    </div>
  </div>
</template>

<script>
import menuHeader from "@/components/utils/menuHeader.vue";
import ProfileSettings from "../components/ProfileSettings.vue";
import SecuritySettings from "../components/SecuritySettings.vue";
import NotificationSettings from "../components/NotificationSettings.vue";

export default {
  components: {
    menuHeader,
    ProfileSettings,
    SecuritySettings,
    NotificationSettings,
  },
  data() {
    return {
      options: [
        {
          id: 1,
          title: "profile",
          header: "profile settings",
          description: "",
          active: true,
        },
        {
          id: 2,
          title: "security",
          header: "change password",
          description: "",
          active: false,
        },
        {
          id: 3,
          title: "resume",
          header: "resume",
          description: "",
          active: false,
        },
        {
          id: 4,
          title: "competencies",
          header: "competencies",
          description: "",
          active: false,
        },
        {
          id: 5,
          title: "experience",
          header: "experience",
          description: "",
          active: false,
        },
        {
          id: 6,
          title: "notifications",
          header: "notifications",
          description: "Activate notifications settings by clicking the toggle",
          active: false,
        },
      ],
      activeEl: {},
    };
  },

  methods: {
    setActive(value) {
      console.log(value, "ommmo");
      this.activeEl = value;
    },
  },
};
</script>

<style></style>
