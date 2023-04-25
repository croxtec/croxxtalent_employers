<template>
  <div class="t-info" id="campaigns-table">
    <div class="t-body">
      <div class="t-row">
        <div class="main-table">
          <div class="t-data">
            <h6 class="cell-header">Name</h6>
            <h6 class="cell-content">233</h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">Email</h6>
            <h6 class="cell-content">24 July 2021</h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">Phone</h6>
            <h6 class="cell-content">24 July 2021</h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">Job Title</h6>
            <h6 class="cell-content">24 July 2021</h6>
          </div>

          <div class="t-data d-flex align-items-center justify-content-center" role="button" @click="details = !details">
            <i-icon icon="ion:ellipsis-horizontal-outline" />
          </div>
        </div>

        <div class="table-details" v-if="details">
          
          <div class="t-data">
            <h6 class="cell-header">Date & Time</h6>
            <h6 class="cell-content">5 Years</h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">Status</h6>
            <h6 class="cell-content">Full Time</h6>
          </div>

          <!-- <div class="t-data">
            <h6 class="cell-header">Salary Range</h6>
            <h6 class="cell-content">$10,000 - $15,000</h6>
          </div>

          <div class="t-data">
            <span class="status managed">Managed By Croxxtalent</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            details: false
        }
    }
};
</script>

<style></style>
