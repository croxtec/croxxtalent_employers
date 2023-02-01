<template>
  <div class="jobs--cards">
    <div class="job--card" v-for="item in 8" :key="item">
      <div class="top d-flex justify-content-between align-items-center">
        <CxAvatar />
        <CxBorderButton> <slot>Full Time</slot> </CxBorderButton>
      </div>
      <div class="middle mt-3">
        <h6 class="font-weight-bolder">Chemical Engineer</h6>
        <div
          class="d-flex align-items-center mt-1"
          style="font-weight: 300; gap: 3px; font-size: 12px"
        >
          <span style="color: #515b6f">Agency</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path fill="#515b6f" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z" />
            </svg>
          </span>
          <span style="color: #515b6f">San Francisco, USA</span>
        </div>

        <div class="mt-2">
          <p class="small" style="color: #515b6f">
            Lorem ipsum tenetur laborum? Earum eum hic illo beatae.
          </p>
        </div>

        <div class="mt-3 d-flex align-items-center flex-wrap" style="gap: 8px">
          <span class="tag a">Acrylic</span>
          <span class="tag d">Drilling</span>
          <span class="tag p">Pipping</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CxBorderButton from "../buttons/cxBorderButton.vue";
import CxAvatar from "../static/cxAvatar.vue";
export default {
  components: {
    CxBorderButton,
    CxAvatar,
  },
};
</script>
