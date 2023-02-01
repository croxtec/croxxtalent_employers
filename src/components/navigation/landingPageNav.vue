<template>
  <div class="navbar-transparent sticky-top bg-white">
    <div class="container py-4">
      <div class="d-flex align-items-center justify-content-between">
        <div class="app-logo">
          <router-link to="/"
            ><img src="@/assets/img/logo.png" width="250" alt=""
          /></router-link>
        </div>
        <ul
          class="m-0 app--nav_items d-flex align-items-center"
          style="gap: 30px"
        >
          <li>
            <router-link to="/">For Employers</router-link>
          </li>
          <li>
            <router-link to="/talents">For Talents</router-link>
          </li>
          <li>
            <router-link to="/resources">Resources</router-link>
          </li>
          <li>
            <router-link to="/about-us">About Us</router-link>
          </li>
          <li>
            <cx-button><slot>Login</slot></cx-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cxButton from "../buttons/cxButton.vue";
export default {
  components: { cxButton },
  data() {
    return {};
  },
};
</script>
