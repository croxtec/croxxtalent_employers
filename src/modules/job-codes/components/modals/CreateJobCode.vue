<template>
  <modal-dialog>
    <template #header>
      <div class="d-flex justify-content-center align-items-center w-100">
        <h4 class="text-center w-100" style="font-weight: 600">
          Create Job Code
        </h4>
        <span role="button" class="d-flex justify-content-end w-auto" @click="close">
          <i-icon
            icon="material-symbols:close"
            width="20px"
            class="text-danger"
          />
        </span>
      </div>
    </template>
  
    <template #body>
      <div>
        <validation-observer  ref="form" v-slot="{ invalid, handleSubmit }">
          <form   class="d-flex flex-column mt-3"
                 style="gap: 20px" @submit.prevent="handleSubmit(createJobCode)">
            <span class="error-alert" v-if="error">{{ error }}</span>
            <div>
              <validation-provider v-slot="validationContext" vid="job_title"  name="Job Title" rules="required|min:3|max:100">
                <label for="">Job Title <span class="text-danger">*</span></label>
                <input
                  type="text"
                  v-model="payload.job_title"
                  placeholder="Job Title"
                />
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div>
              <validation-provider v-slot="validationContext" vid="job_code"  name="Job Code" rules="required|min:3|max:100">
                <label for="">Job Code <span class="text-danger">*</span></label>
                <input
                  type="text"
                  v-model="payload.job_code"
                  placeholder="Job Code"
                />
                <small
                  v-for="item in errors.job_code"
                  :key="item"
                  class="text-danger"
                  >{{ "*" + item }}</small
                >
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div>
              <validation-provider v-slot="validationContext" vid="description"  name="Description" rules="required|min:10|max:100">  
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
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div class="text-center">
              <button class="primary-btn button" :class="{ 'bg-secondary': loading || invalid}" :disabled="loading || invalid">
                <span v-if="invalid || loading">
                  <i-icon
                    icon="eos-icons:three-dots-loading"
                    style="color: var(--white-50)"
                /></span>
                <span v-else>Create</span>
              </button>
            </div>
          </form>
        </validation-observer>
      </div>
    </template>

  </modal-dialog>
</template>

<script>
import ModalDialog from "@/components/modals/ModalDialog.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    ModalDialog,
  },
  data() {
    return {
      payload: {
        job_title: "",
        job_code: "",
        job_description: "",
      },
    };
  },
  methods: {
    ...mapActions("job_codes", ["create"]),
    createJobCode() {
      this.create(this.payload);
    },
    close(){
      // this.$emit('close'),
      this.$store.commit("job_codes/SET_CREATE", false);
    }
  },
  beforeMount() {
    this.$store.commit("job_codes/REMOVE_ALERTS");
  },
  computed: {
    ...mapState("job_codes", {
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      loading: (state) => state.loading,
      success: (state) => state.success,
    }),
  },
};
</script>

<style></style>
