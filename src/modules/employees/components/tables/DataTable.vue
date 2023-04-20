<template>
  <div class="t-info" id="campaigns-table">
    <div class="t-body">
      <div>
        <img
          src="https://secretsourcemarketing.com/wp-content/uploads/2021/07/company-icon-02.png"
          alt=""
        />
      </div>
      <div class="t-row">
        <div class="main-table">
          <div class="t-data">
            <h6 class="cell-header">Wellhead Engineer</h6>
            <h6 class="cell-content d-flex align-items-center" style="gap: 5px">
              <span>Schlumberger</span>
              <i-icon icon="material-symbols:circle" width="5px" />
              <span>UAE</span>
              <i-icon icon="material-symbols:circle" width="5px" />
              <span>Full Time</span>
            </h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">No. of Applicants</h6>
            <h6 class="cell-content">233</h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">Date Created</h6>
            <h6 class="cell-content">24 July 2021</h6>
          </div>

          <div class="t-data">
            <span class="status pending">In Review</span>
          </div>

          <div class="t-data d-flex align-items-center justify-content-end" role="button" @click="details = !details">
            <i-icon icon="ion:ellipsis-horizontal-outline" />
          </div>
        </div>

        <div class="table-details" v-if="details">
          <div class="t-data">
            <h6 class="cell-header">Industry</h6>
            <h6 class="cell-content">
              Energy
            </h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">Experience</h6>
            <h6 class="cell-content">5 Years</h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">Work Type</h6>
            <h6 class="cell-content">Full Time</h6>
          </div>

          <div class="t-data">
            <h6 class="cell-header">Salary Range</h6>
            <h6 class="cell-content">$10,000 - $15,000</h6>
          </div>

          <div class="t-data">
            <span class="status managed">Managed By Croxxtalent</span>
          </div>
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
