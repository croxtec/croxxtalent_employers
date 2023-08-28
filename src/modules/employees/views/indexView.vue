<template>
  <div id="campaigns" class="spacer">
    <div
      class="d-flex align-items-center justify-content-end"
      style="gap: 10px"
    >
      <a
        href="employeeUploadTemplate.xlsx"
        download
        class="button dark-btn d-flex align-items-center justify-content-center"
        style="gap: 5px"
      >
        <!-- <span> <i-icon icon="solar:download-minimalistic-outline" /> </span><span>Download Template</span> -->
        <span> <i-icon icon="solar:download-minimalistic-outline" /> </span>
      </a>
      <button
        @click="importEmployees"
        class="button dark-btn d-flex align-items-center justify-content-center"
        style="gap: 5px"
      >
        <span> <i-icon icon="solar:upload-minimalistic-outline" /> </span
        ><span>Upload Employees</span>
      </button>
      <button @click="createEmployee"
        class="button dark-btn d-flex align-items-center justify-content-center"
        style="gap: 5px"
      >
        <span> <i-icon icon="solar:upload-minimalistic-outline" /> </span
        ><span>Add Employee</span>
      </button>
    </div>

    <div class="table-data mt-3">
      <div
        class="table-top d-flex align-items-center justify-content-between gapper"
      >
        <h6>All Employees</h6>
        <div>
          <div class="search-area">
            <i-icon icon="teenyicons:search-outline" />
            <input type="search" name="" id="" placeholder="Search" />
          </div>
        </div>
      </div>
      <hr class="m-0" style="border-color: var(--primary-200)" />
      <div class="table-content gapper">
        <DataTable />
      </div>
    </div>

    <!-- Create Employee Modal  -->
    <create-employee v-if="create_employee" @close="closeModal"/>

    <!-- Upload Employee  -->
    <upload-employees v-if="import_employees"  @closeModal="closeImportModal"/>
  </div>
</template>

<script>
import DataTable from "../components/tables/DataTable.vue";
import { mapActions, mapState } from "vuex";
import CreateEmployee from '../components/modals/CreateEmployee.vue';
import UploadEmployees from '../components/modals/UploadEmployees.vue';
export default {
  components: { DataTable, CreateEmployee, UploadEmployees },
  data(){
    return{
    }
  },
  methods: {
    ...mapActions("employees", ["list"]),
    createEmployee(){
      this.$store.commit("employees/SET_CREATE", true)
    },

    closeModal() {
      this.$store.commit("employees/SET_CREATE", false)
    },

    closeImportModal(){
      this.$store.commit("employees/SET_IMPORT", false)
    },
    
    importEmployees(){
      this.$store.commit("employees/SET_IMPORT", true)
    }
  },
  beforeMount() {
    this.list();
    this.$store.commit("employees/SET_CREATE", false)
  },
  computed: {
    ...mapState("employees", {
      create_employee: (state) => state.createEmployeeModal,
      import_employees: (state) => state.importEmployeeModal,
    })
  }
};
</script>

<style></style>
