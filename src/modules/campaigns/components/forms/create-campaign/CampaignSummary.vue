<template>
    <div>
      <h5 class="form-header text-center">Summary</h5>
      <form class="form-data">
          <div>
              <label for="">Summary <span class="text-danger">*</span></label>
              <textarea name="" id="" cols="30" rows="6" placeholder="Input Summary"></textarea>
          </div>
          <div>
              <label for="">Description <span class="text-danger">*</span></label>
              <vue-editor v-model="content" />
          </div>
          
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return {
            content: "Hello World"
        }
    }
  }
  </script>
  
  <style>
  
  </style>