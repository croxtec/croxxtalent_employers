<template>
  <div id="app-header" class="spacer sticky-top">
    <div class="app-header-content">
     App Header
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {};
  },
  methods: {},

  mounted() {},

  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>

<style></style>
