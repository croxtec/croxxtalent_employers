<template>
  <div id="campaigns" class="spacer">
    <div class="heaader d-flex justify-content-end" style="gap: 10px">
      <button disabled
        class="button dark-btn d-flex align-items-center justify-content-center"
        style="gap: 5px"
      >
        <!-- <span> <i-icon icon="solar:download-minimalistic-outline" /> </span><span>Download Template</span> -->
        <span> <i-icon icon="solar:download-minimalistic-outline" /> </span>
      </button>
      <button disabled="true"
        class="button dark-btn d-flex align-items-center justify-content-center"
        style="gap: 5px"
      >
        <span> <i-icon icon="solar:upload-minimalistic-outline" /> </span
        ><span>Upload Job Code</span>
      </button>
      
      <button class="button dark-btn d-flex align-items-center" style="gap:4px" @click="createJobCode">
        <span> <i-icon icon="material-symbols:add"/> </span>
        <span>Add Job Code</span>
      </button>
    </div>

    <div class="table-data mt-3">
      <div class="table-top d-flex align-items-center justify-content-between gapper">
        <h6>All Job Codes</h6>
        <div>
          <div class="search-area">
            <i-icon icon="teenyicons:search-outline"/>
            <input type="search" name="" id="" placeholder="Search">
          </div>
        </div>
      </div>
      <hr class="m-0" style="border-color: var(--primary-200);"> 
      <div class="table-content gapper">
        <DataTable/>
      </div>
    </div>

    <!-- Create Job Code -->
    <div>
      <create-job-code v-if="create_job_code"/>
    </div>

    <!-- Add Manager -->
    <div>
      <add-manager v-if="add_manager_modal"/>
    </div>
  </div>
</template>

<script>
import DataTable from "../components/tables/DataTable.vue";
import { mapActions, mapState } from "vuex"
import CreateJobCode from '../components/modals/CreateJobCode.vue';
import AddManager from '../components/modals/AddManager.vue';
export default {
  components: { DataTable, CreateJobCode, AddManager },
  data(){
    return {
    }
  },
  
  methods: {
    ...mapActions("job_codes", ["list"]),
    createJobCode(){
      this.$store.commit("job_codes/SET_CREATE", true)
    },
    closeModal() {
      this.$store.commit("job_codes/SET_CREATE", false)
    }
  },

  beforeMount() {
    this.list();
    this.$store.commit("job_codes/SET_CREATE", false)
    this.$store.commit("modals/CLEAR_MODAL")
  },

  computed: {
    ...mapState("job_codes", {
      create_job_code: (state) => state.createJobCodeModal
    }),
    ...mapState('modals', {
      add_manager_modal: (state) => state.addManager
    })
  }
}
</script>

<style>

</style>