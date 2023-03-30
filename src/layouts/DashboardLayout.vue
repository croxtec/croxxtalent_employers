<template>
  <div>
    <app-drawer />
    <div id="main" :class="{ collapsible: isCollapsed }">
      <app-header />
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/navigation/AppHeader.vue";
import AppDrawer from "@/components/navigation/AppDrawer.vue";
import { mapState } from "vuex";
export default {
  components: { AppHeader, AppDrawer },
  name: "DashboardLayout",
  computed: {
    ...mapState("drawer", {
      isCollapsed: (state) => state.collapsed,
    }),
  },
};
</script>
