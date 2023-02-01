<template>
  <div class="looking-for-talent py-5">
    <div class="container">
      <div class="d-lg-flex align-items-center" style="gap: 20px">
        <div class="col-md-6 looking--card">
          <div class="d-flex flex-column justify-content-between">
            <img src="@/assets/img/employee_search.png" width="100" alt="" />
            <div class="d-flex flex-column" style="gap: 20px">
              <h3 style="color: var(--primary-color); font-weight: 700">
                Get hired!
              </h3>
              <h6>
                Looking to get hired by top engineering companies? Look no
                further. Create your CV and start applying for jobs.
              </h6>
              <router-link to="/register">
                <button style="width: max-content" class="primary--button">
                  Create CV
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="d-lg-flex flex-column justify-content-between"
            style="gap: 20px"
          >
            <div class="d-flex flex-column" style="gap: 20px">
              <img src="@/assets/img/employer_search.png" width="100" alt="" />
              <h3 style="color: var(--primary-color); font-weight: 700">
                Looking For Talent?
              </h3>
              <h6>
                CroxxTalent boasts of the best skilled workers. Sign up as an
                employers and go through our robust talent database
              </h6>
              <router-link to="/register">
                <button
                  style="width: max-content"
                  class="primary--button_border"
                >
                  Sign Up
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
