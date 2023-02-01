<template>
  <div class="container my-5">
    <h1 class="font-weight-bold text-center">We are on a Mission</h1>
    <hr
      class="mx-auto"
      style="width: 60px; border-bottom: 4px solid var(--tertiary-color)"
    />
    <div class="d-lg-flex align-items-center my-4" style="gap: 20px">
      <div class="col-md-6">
        <div>
          CroxxTalent is pioneering a better way of matching talent in the
          energy industry. We understand the dynamics around energy and
          competencies to drive innovation.
          <pre />
          Our mission is to create a best-in-class recruitment and onboarding
          experience aligned with the demands and work culture for the benefit
          of all.
          <pre />
          We are enabling the local, regional, and global work network with the
          underlying pillar of integrity and customer satisfaction.
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

      <div class="col-md-6">
        <img width="100%" src="@/assets/img/about.png" alt="" />
      </div>
    </div>
  </div>
</template>
