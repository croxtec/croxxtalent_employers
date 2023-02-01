<template>
  <div>
    <header class="app--header">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="overlay-image">
              <img
                src="@/assets/img/hero-1.jpeg"
                class="d-block w-100"
                alt="..."
              />
              <div class="overlay"></div>
            </div>

            <div class="carousel-caption d-md-flex">
              <div>
                <h1 class="text-left">
                  Join Africa's leading <br />
                  Energy marketplace...
                </h1>
                <p class="w-50 text-left text-secondary my-3">
                  Join Africa's leading Energy marketplace Find great talent.
                  Contract hire. Engineers taking their career to next level.
                </p>
                <div
                  class="call--to_action d-flex align-items-center"
                  style="gap: 20px"
                >
                  <router-link to="/register"
                    ><button class="primary--button">
                      Find Work
                    </button></router-link
                  >
                  <router-link to="/register">
                    <button class="primary--button_border bg-white">
                      Search Talent
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="overlay-image">
              <img
                src="@/assets/img/hero-2.jpeg"
                class="d-block w-100"
                alt="..."
              />
              <div class="overlay"></div>
            </div>
            <div class="carousel-caption right--side d-md-flex">
              <div>
                <h6 class="text-secondary text-left font-weight-bold">
                  For Talents
                </h6>
                <hr class="w-75" />
                <h1 class="text-left">Find jobs faster...</h1>

                <p class="text-left text-secondary my-3">
                  Fill in your relevant info and skills and apply for the
                  highest paying contract jobs. Find opportunities, get hired
                  and paid easily..
                </p>
                <div
                  class="call--to_action d-flex align-items-center"
                  style="gap: 20px"
                >
                  <router-link to="/register">
                    <button class="primary--button">Join CroxxTalent</button>
                  </router-link>
                  <!-- <button class="primary--button_border">Search Talent</button> -->
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="overlay-image">
              <img
                src="@/assets/img/hero-3.jpeg"
                class="d-block w-100"
                alt="..."
              />
              <div class="overlay"></div>
            </div>
            <div class="carousel-caption d-md-flex">
              <div>
                <h6 class="text-secondary text-left font-weight-bold">
                  For Companies
                </h6>
                <hr class="w-25" />
                <h1 class="text-left">Find skilled Talents...</h1>
                <p class="w-50 text-left text-secondary my-3">
                  Find skilled talents for contract hire. No obligations. Just
                  skilled talents who come in and do the job for you.
                </p>
                <div
                  class="call--to_action d-flex align-items-center"
                  style="gap: 20px"
                >
                  <router-link to="/register"
                    ><button class="primary--button">
                      Get Started
                    </button></router-link
                  >
                  <!-- <button class="primary--button_border">Search Talent</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleFade"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleFade"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </header>
  </div>
</template>
<script>
// import AppNav from "@/components/static/AppNav";
// import HeroSection from "./HeroSection.vue";

export default {};
</script>
