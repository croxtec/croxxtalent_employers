<template>
  <div id="app-header" class="spacer sticky-top">
    <div class="app-header-content">
      <h4>{{ header.header }}</h4>
      <div class="app-icons">
        <span> <i-icon icon="tabler:message-2" class="icon" /> </span>
        <span> <i-icon icon="mi:notification" class="icon" /> </span>
        <span class="user"> {{ user.name_initials }} </span>
      </div>
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
    ...mapState("middleware", {
      user: (state) => state.user,
    }),
    header() {
      return this.$route.meta;
    },
  },
};
</script>

<style scoped>
/* APP HEADER  */
#app-header {
  border-bottom: 1px solid var(--gray-100);
  background: var(--white);
}

.user {
  border: 2px solid var(--primary-100);
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  font-weight: 500;
  color: var(--primary-500);
}

.app-header-content {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}

.app-header-content h4 {
  font-weight: 600;
  font-size: 22px;
}

.app-icons {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 18px;
  align-items: center;
}

.app-icons .icon {
  font-size: 20px;
  color: var(--primary-500);
}

.header-icon {
  font-size: 20px;
}

.user-name {
  font-size: 15.6px;
  font-weight: 400;
}

.user-menu-actions {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 10px;
  align-items: center;
}

.header-image {
  width: 35px;
  height: 35px;
  object-fit: cover;
  -o-object-fit: cover;
  object-position: center;
  -o-object-position: center;
  border-radius: 50%;
}
</style>
