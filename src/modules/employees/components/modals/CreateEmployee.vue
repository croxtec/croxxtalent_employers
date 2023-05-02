<template>
  <modal-dialog>
    <template #header>
      <div class="d-flex justify-content-center align-items-center w-100">
        <h4 class="text-center w-100" style="font-weight: 600">
          Create Employee
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
          @submit.prevent="createEmployee"
        >
          <span class="error-alert" v-if="error">{{ error }}</span>
          <div>
            <label for="">Name <span class="text-danger">*</span></label>
            <input
              type="text"
              v-model="payload.name"
              placeholder="Enter employee name"
            />
            <small
              v-for="item in errors.name"
              :key="item"
              class="text-danger"
              >{{ "*" + item }}</small
            >
          </div>
          <div>
            <label for="">Email <span class="text-danger">*</span></label>
            <input
              type="text"
              v-model="payload.email"
              placeholder="Enter employee email"
            />
            <small
              v-for="item in errors.email"
              :key="item"
              class="text-danger"
              >{{ "*" + item }}</small
            >
          </div>
          <div>
            <label for=""
              >Phone Number <span class="text-danger">*</span></label
            >
            <input
              type="text"
              v-model="payload.phone"
              placeholder="Enter employee phone number"
            />
            <small
              v-for="item in errors.phone"
              :key="item"
              class="text-danger"
              >{{ "*" + item }}</small
            >
          </div>
          <div>
            <label for=""
              >Select Job Title <span class="text-danger">*</span></label
            >
            <select name="" id="" v-model="payload.job_code_id">
              <option value="Select Job title" selected disabled>
                Select Job Title
              </option>
              <option v-for="item in results" :key="item.id" :value="item.id">
                {{ item.job_title }}
              </option>
            </select>
            <small
              v-for="item in errors.job_code_id"
              :key="item"
              class="text-danger"
              >{{ "*" + item }}</small
            >
          </div>

          <div class="text-center">
            <button
              class="primary-btn button w-100"
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
  components: { ModalDialog },
  data() {
    return {
      payload: {
        name: null,
        email: null,
        phone: null,
        job_code_id: null,
      },
    };
  },
  methods: {
    ...mapActions("employees", ["create"]),
    ...mapActions("job_codes", ["list"]),
    createEmployee() {
      this.create(this.payload);
    },
    close(){
      this.$emit('close'),
      this.$store.commit("employees/REMOVE_ALERTS");
    }
  },
  beforeMount() {
    this.list();
    this.$store.commit("employees/REMOVE_ALERTS");
  },
  computed: {
    ...mapState("employees", {
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      loading: (state) => state.loading,
      success: (state) => state.success,
    }),
    ...mapState("job_codes", {
      results: (state) => state.results,
    }),
  },
};
</script>

<style></style>
