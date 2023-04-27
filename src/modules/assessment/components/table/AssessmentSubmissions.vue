<template>
  <!-- <div class="t-info" id="campaigns-table">
      <div class="t-body d-flex " style="gap:20px">
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
  
            <div class="t-data d-flex align-items-center justify-content-center" role="button" @click="details = !details">
              <i-icon icon="ion:ellipsis-horizontal-outline" />
            </div>
          </div>
  
        </div>
      </div>
    </div> -->
  <div>
    <div class="table-responsive">
      <table class="table table-centered table-nowrap mb-0">
        <tbody>
          <tr>
            <td>Hello</td>
            <td>Hu</td>
            <td>Who</td>
            <td>Is</td>
            <td>this</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: false,
    };
  },
};
</script>

<style scoped>
.table td,
.table th,
.table thead th {
  border-top: transparent;
  vertical-align: middle;
}
table {
  border-collapse: separate;
  border-spacing: 0 15px;
  width: 100%;
}
th {
  color: white;
}
th {
  /* width: 100%; */
  border: 1px solid var(--primary-200);
  /* padding: 5px; */
  background: var(--primary-500);
  font-size: 0.8rem;
  text-align: center;
}
td {
  /* width: 100%; */
  border: none;
  /* padding: 5px; */
  background: var(--white);
  padding: 1rem;
  font-size: 0.8rem;
  text-align: center;
}
th:nth-child(1) {
  border-radius: 20px 0 0 20px;
}
th:last-child {
  border-radius: 0 20px 20px 0;
}
td:nth-child(1) {
  border-radius: 20px 0 0 20px;
}
td:last-child {
  border-radius: 0 20px 20px 0;
}
.table thead th {
  border-bottom: none;
}
</style>
