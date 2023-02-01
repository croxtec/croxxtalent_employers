<template>
  <div>
    <div class="navbar-transparent sticky-top shadow-lg">
      <div class="container">
        <div
          class="bg-white d-flex justify-content-between align-items-center py-3"
        >
          <div class="app-logo">
            <router-link to="/"
              ><img src="@/assets/img/logo.png" width="180" alt=""
            /></router-link>
          </div>

          <div @click="drawer = true" role="button">
            <i
              class="fa fa-bars"
              style="font-size: 25px; font-weight: 400"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <el-drawer :visible.sync="drawer" direction="rtl" size="80%">
      <div class="p-5">
        <ul class="m-0 d-flex app--nav_items flex-column" style="gap: 30px">
          <li @click="handleClose">
            <router-link to="/">Home</router-link>
          </li>
          <li @click="handleClose">
            <router-link to="/about-us">About</router-link>
          </li>
          <li @click="handleClose">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>

        <div class="call--to_action d-flex flex-column mt-4" style="gap: 20px">
          <el-popover placement="bottom-start" width="200" trigger="click">
            <div class="p-3">
              <ul class="mb-0 d-flex flex-column" style="gap: 20px">
                <li @click="handleClose">
                  <router-link to="/app/login" class="text-dark"
                    >Talent</router-link
                  >
                </li>
                <li @click="handleClose">
                  <router-link to="/app/login/employer" class="text-dark"
                    >Employer</router-link
                  >
                </li>
                <li @click="handleClose">
                  <router-link to="/app/login/affiliate" class="text-dark"
                    >Affiliate</router-link
                  >
                </li>
              </ul>
            </div>
            <button class="primary--button" slot="reference">Login</button>
            <!-- <el-button>Click to activate</el-button> -->
          </el-popover>
          <router-link to="/register"
            ><button class="primary--button_border">
              Register
            </button></router-link
          >
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
    };
  },
  methods: {
    handleClose() {
      this.drawer = false;
    },
  },
};
</script>
