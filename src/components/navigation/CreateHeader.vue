<template>
  <div class="spacer create-header">
    <div class="container">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center" role="button" @click="goBack" style="gap:10px; width: 20%;">
          <i-icon icon="ic:sharp-keyboard-backspace" width="20px"/>
          <span style="font-size:14px">Back to dashboard</span>
        </div>
        <div class="text-center w-100">
          <h4 class="font-weight-bolder">Create Assessment</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style></style>
