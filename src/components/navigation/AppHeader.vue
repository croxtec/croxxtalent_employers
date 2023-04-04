<template>
  <div id="app-header" class="spacer sticky-top">
    <div class="app-header-content">
     {{ header.header }}
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
    header(){
      return this.$route.meta
    }
  },
};
</script>

<style></style>

<style></style>
