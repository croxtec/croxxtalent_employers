<template>
  <div class="">
    <app-header />
    <div class="container mt-5">
      <div class="d-lg-flex">
        <div class="col-md-6 mb-3"><ContactDetails /></div>
        <div class="col-md-6"><ContactForm /></div>
      </div>
    </div>

    <hr class="mt-5" />
  </div>
</template>

<script>
import AppHeader from "../contact/components/AppHeader.vue";
import ContactDetails from "./components/contactDetails.vue";
import ContactForm from "./components/contactForm.vue";
export default {
  components: { AppHeader, ContactDetails, ContactForm },
};
</script>
