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
        <validation-observer  ref="form" v-slot="{ invalid, handleSubmit }">
          <form 
            class="d-flex flex-column mt-3"
            style="gap: 20px"
            @submit.prevent="handleSubmit(createEmployee)">
            <span class="error-alert" v-if="error">{{ error }}</span>
            <div>
              <validation-provider v-slot="validationContext" vid="name"  name="name" rules="required|min:3|max:100">
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
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div>
              <validation-provider v-slot="validationContext" vid="email"  name="email" rules="required|email">
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
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div>
              <validation-provider v-slot="validationContext" vid="phone"  name="phone" rules="required|numeric">
                <label for="">Phone Number <span class="text-danger">*</span></label>
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
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div>
              <validation-provider v-slot="validationContext" vid="job_code"  name="job code" rules="required">
                <label for="">Select Job Title <span class="text-danger">*</span></label>
                <select name="" id="" v-model="payload.job_code_id">
                  <option value="" selected disabled>Select Job Title</option>
                  <option v-for="item in results" :key="item.id" :value="item.id">{{ item.job_title }}</option>
                </select>
                  <small
                    v-for="item in errors.job_code_id"
                    :key="item"
                    class="text-danger"
                    >{{ "*" + item }}</small
                  >
                  <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
          
            <div class="text-center">
              <button
                class="primary-btn button"
                :class="{ 'bg-secondary': loading || invalid }"
                :disabled="invalid || loading"
              >
                <span v-if="loading || invalid">
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
  components: { ModalDialog },
  data() {
    return {
      payload: {
        name: null,
        email: null,
        phone: null,
        job_code_id: "",
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

