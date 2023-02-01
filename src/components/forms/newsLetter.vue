<template>
  <div class="subscribe-to-newsletter">
    <div class="container">
      <div class="subscribe-form">
        <h4 class="mb-3 font-weight-bolder">
          Subscribe to our <br />
          monthly newsletter
        </h4>
        <p class="desc--text w-100">
          Be the first to know what's new in the energy industry. <br />
          Subscribe to our newsletter now!
        </p>
        <div class="subscibe-input">
          <input type="text" placeholder="Email Address" />
          <px-button> <slot>Subscribe</slot> </px-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pxButton from "../buttons/pxButton.vue";
export default {
  components: { pxButton },
};
</script>
