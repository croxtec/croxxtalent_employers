<template>
  <modal-dialog>
    <template #header>
      <div class="d-flex justify-content-center align-items-center w-100 mb-4">
        <h4 class="text-center w-100" style="font-weight: 600">Add Manager</h4>
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
      <hr />
    </template>

    <template #body>
      <div class="listing">
        <!-- {{ jobCodeId }} -->
        <div v-for="(item, index) in results" :key="index">
          <span class="d-flex align-items-center">
            <span class="w-100 employee-name">{{ item.name }}</span>
            <span>
              <input
                class=""
                :id="index"
                :value="item.id"
                v-model="managers"
                type="checkbox"
              />
            </span>
          </span>
          <hr class="" v-if="index + 1 < results.length" />
        </div>
      </div>
      <div class="text-center mt-3">
        <button class="button primary-btn" @click="addManager">Submit</button>
      </div>
    </template>
  </modal-dialog>
</template>

<script>
import ModalDialog from "@/components/modals/ModalDialog.vue";
import { mapActions, mapState } from "vuex";
export default {
  props: ['id'],
  components: {
    ModalDialog,
  },
  data() {
    return {
      managers: [],
    };
  },
  methods: {
    ...mapActions("employees", ["list"]),
    close() {
      this.$store.dispatch("modals/setAddManager");
    },
    addManager() {
      let payload = {
        id: this.jobCodeId,
        data: { managers: this.managers}
      }
      this.$store.dispatch("job_codes/addManager", payload)
      .then(()=> {
        this.$store.commit("modals/CLEAR_MODAL")
      })
      console.log(payload);
    },
  },
  beforeMount() {
    this.list();
    this.$store.commit("employees/SET_CREATE", false);
  },
  computed: {
    ...mapState("employees", {
      results: (state) => state.results,
    }),
    ...mapState("modals", {
      jobCodeId: (state) => state.jobCodeId,
    }),
  },
};
</script>

<style>

.listing {
  border: 1px solid var(--primary-200);
  padding: 20px;
  border-radius: 25px;
}

.employee-name {
  font-size: 14px;
}

</style>
