<template>
  <div id="create-campaign" class="spacer">
    <div class="form-content mt-4">
      <h4 class="text-center mt-3 font-weight-bold">Create New Job Code</h4>
      
      <form class="form-data" @submit.prevent="createJobCode">
        <span class="error-alert" v-if="error">{{ error }}</span>
        <div>
          <label for="">Job Title <span class="text-danger">*</span></label>
          <input type="text" v-model="payload.job_title" placeholder="Job Title" />
        </div>
        <div>
          <label for="">Job Code <span class="text-danger">*</span></label>
          <input type="text" v-model="payload.job_code" placeholder="Job Code" />
          <small v-for="item in errors.job_code" :key="item" class="text-danger">{{ "*"+item }}</small>
        </div>
        <div>
          <label for=""
            >Job Description <span class="text-danger">*</span></label
          >
          <textarea
          v-model="payload.description"
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Job Description"
          ></textarea>
        </div>
        <div class="text-center">
          <button class="primary-btn button">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data(){
    return {
      payload: {
        job_title: "",
        job_code: "",
        job_description: ""
      }
    }
  },
  methods: {
    ...mapActions("job_codes", ["create"]),
    createJobCode(){
      this.create(this.payload)
    }
  },
  computed: {
    ...mapState("job_codes", {
      error: (state) => state.error,
      errors: (state) => state.validationErrors
    })
  }
};
</script>

<style></style>
