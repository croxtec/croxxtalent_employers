<template>
  <div>
    <hero-section />
    <FeaturedJobs />
    <news-letter />
  </div>
</template>

<script>
import HeroSection from "../components/talents/heroSection.vue";
import FeaturedJobs from "../components/talents/featuredJobs.vue";
import NewsLetter from "@/components/forms/newsLetter.vue";
export default {
  components: { HeroSection, FeaturedJobs, NewsLetter },
};
</script>
, NewsLetter
