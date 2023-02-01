<template>
  <div class="talent--hero_section">
    <div class="container">
      <div class="pivot--text">
        <div class="left--pivot">
          <h1 class="main--text">Find the right job & Get hired</h1>
          <p class="desc--text">
            Millions of jobs. Search by what matters to you and find the one
            that's right for you.
          </p>
        </div>
        <div class="right--pivot">
          <div>
            <h6>100%</h6>
            <h5>
              Verified <br />
              Offers
            </h5>
          </div>
        </div>
      </div>

      <!-- Hero Search Area  -->
      <div class="talent--search">
        <HeroSearch />
        <div class="mt-2">
          <ListPopularJobs />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSearch from "@/components/forms/heroSearch.vue";
import ListPopularJobs from "@/components/static/listPopularJobs.vue";

export default {
  components: { HeroSearch, ListPopularJobs },
};
</script>
