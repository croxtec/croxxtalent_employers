<template>
  <div class="looking-for-talent">
    <div class="container py-5">
      <h1 class="font-weight-bold text-center">We have a vision</h1>
      <hr
        class="mx-auto"
        style="width: 60px; border-bottom: 4px solid var(--tertiary-color)"
      />
      <div class="d-lg-flex align-items-center">
        <div class="col-md-6">
          <img width="80%" src="@/assets/img/about.png" alt="" />
        </div>
        <div class="col-md-6">
          <div>
            Our vision is to be a talent partner of choice with an easily
            accessible platform providing a gateway for energy professionals
          </div>
          <router-link to="/register"
            ><button class="primary--button my-3">
              Get Started
            </button></router-link
          >
          <div>
            <span
              >Already a member? <router-link to="/login">Login</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
