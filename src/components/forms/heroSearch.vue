<template>
  <div class="hero--search">
    <div class="left line--field">
      <i class="isax isax-search-normal"></i>
      <input
        type="text"
        class="line--input"
        placeholder="Job title or keyword"
      />
    </div>
    <div class="right line--field">
      <i class="isax isax-location"></i>
      <input type="text" class="line--input" />
    </div>
    <div class="end">
      <cx-button> <slot>Search</slot> </cx-button>
    </div>
  </div>
</template>

<script>
import CxButton from "../buttons/cxButton.vue";
export default {
  components: {
    CxButton,
  },
};
</script>
CxButton
