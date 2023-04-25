<template>
  <div id="campaigns" class="spacer">
    <div>
      <CandidatesHeader/>
    </div>
    <div class="table-data mt-3">
      <div class="table-top d-flex align-items-center justify-content-between gapper">
        <h6>Applicants List</h6>
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
import CandidatesHeader from '../components/static/CandidatesHeader.vue';
import DataTable from "../components/tables/DataTable.vue";

export default {
  components: { DataTable , CandidatesHeader},
  
}
</script>

<style>

</style>