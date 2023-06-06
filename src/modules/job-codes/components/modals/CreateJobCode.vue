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
        <form
          class="d-flex flex-column mt-3"
          style="gap: 20px"
          @submit.prevent="createJobCode"
        >
          <span class="error-alert" v-if="error">{{ error }}</span>
          <div>
            <label for="">Job Title <span class="text-danger">*</span></label>
            <input
              type="text"
              v-model="payload.job_title"
              placeholder="Job Title"
            />
          </div>
          <div>
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
            <button
              class="primary-btn button"
              :class="{ 'bg-secondary': loading }"
              :disabled="loading"
            >
              <span v-if="loading">
                <i-icon
                  icon="eos-icons:three-dots-loading"
                  style="color: var(--white-50)"
              /></span>
              <span v-else>Create</span>
            </button>
          </div>
        </form>
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
