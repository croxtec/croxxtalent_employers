<template>
  <modal-dialog>
    <template #header>
      <div class="d-flex justify-content-center align-items-center w-100">
        <h4 class="text-center w-100" style="font-weight: 600">Import File</h4>
        <span
          role="button"
          class="d-flex justify-content-end w-auto"
          @click="close"
        >
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
            <!-- <validation-provider v-slot="validationContext" vid="file"  name="file" rules="required|min:3|max:100"> -->
            <label for="">Select File <span class="text-danger">*</span></label>
            <input type="file" @change="fileUpload()" />
            <small
              v-for="item in errors.file"
              :key="item"
              class="text-danger"
              >{{ "*" + item }}</small
            >
            <!-- <small
              class="text-danger my-2"
              v-text="validationContext.errors[0]"
            ></small> -->
            <!-- </validation-provider> -->
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
              <span v-else>Import</span>
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
        file: null,
      },
    };
  },
  methods: {
    ...mapActions("employees", ["import"]),

    createEmployee() {
      const formData = new FormData();
      formData.append("file", this.payload.file);
      this.import(formData);
    },

    close() {
      this.$emit("closeModal");
      this.$store.commit("employees/REMOVE_ALERTS");
    },

    fileUpload() {
      const input = event.target;
      this.payload.file = input.files[0];
      console.log(this.payload.file);
    },
  },

  beforeMount() {
    this.$store.commit("employees/REMOVE_ALERTS");
  },

  computed: {
    ...mapState("employees", {
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      loading: (state) => state.loading,
      success: (state) => state.success,
    }),
  },
};
</script>

<style></style>
