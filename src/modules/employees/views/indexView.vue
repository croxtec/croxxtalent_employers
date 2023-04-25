<template>
  <div id="campaigns" class="spacer">
    <div class="d-flex align-items-center justify-content-end" style="gap:20px">
      <button class="button dark-btn d-flex align-items-center justify-content-center" style="gap:20px">
        <span> <i-icon icon="solar:download-minimalistic-outline" /> </span><span>Download Template</span>
      </button>
      <button class="button dark-btn d-flex align-items-center justify-content-center" style="gap:20px">
        <span> <i-icon icon="solar:upload-minimalistic-outline" /> </span><span>Upload Employees</span>
      </button>
    </div>

    <div class="table-data mt-3">
      <div class="table-top d-flex align-items-center justify-content-between gapper">
        <h6>All Employees</h6>
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

export default {
  components: { DataTable }
}
</script>

<style>

</style>