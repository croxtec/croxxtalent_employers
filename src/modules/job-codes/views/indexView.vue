<template>
  <div id="campaigns" class="spacer">
    <div class="heaader d-flex justify-content-end">
      <router-link to="/create-code">
        <button class="button dark-btn d-flex align-items-center" style="gap:4px">
        <span> <i-icon icon="material-symbols:add"/> </span>
        <span>Add Job Code</span>
      </button>
      </router-link>
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
  </div>
</template>

<script>
import DataTable from "../components/tables/DataTable.vue";
import { mapActions } from "vuex"
export default {
  components: { DataTable },
  data(){
    return {
    }
  },
  methods: {
    ...mapActions("job_codes", ["list"])
  },
  beforeMount(){
    this.list()
  }
}
</script>

<style>

</style>