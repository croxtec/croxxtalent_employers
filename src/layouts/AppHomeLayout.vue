<template>
  <div>
    <landing-page-nav />
    <slot />
    <app-footer />
  </div>
</template>

<script>
import landingPageNav from "@/components/navigation/landingPageNav.vue";
import AppFooter from "@/components/navigation/AppFooter.vue";

export default {
  components: { landingPageNav, AppFooter },
  name: "HomeLayout",
};
</script>
