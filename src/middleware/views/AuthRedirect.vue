<template>
    <div class="redirecting">
      <div v-if="loading" class="text-center">
        <i-icon icon="eos-icons:bubble-loading" width="60px" color="var(--primary-500)" />
        <h6 class="mt-3">Redirecting</h6>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  export default {
    data() {
      return {
        query: this.$route.query
      };
    },
    methods: {
      ...mapActions("middleware", ["userLogin"]),
        loginUser(){
            let payload = {
                password: window.atob(this.query.sessionId),
                login: window.atob(this.query.userID)
            }
           this.userLogin(payload)
        },
    },
    created(){
      this.loginUser()
    },
    computed: {
        ...mapState("middleware", {
            loading: (state) => state.loading
        })
    }
  };
  </script>
  
  <style scoped>
.redirecting {
    height: 100vh;
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    place-items: center;
}
</style>
  