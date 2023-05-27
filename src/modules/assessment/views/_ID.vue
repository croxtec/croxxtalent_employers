<template>
  <div class="spacer">
    <assessment-submissions />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AssessmentSubmissions from "../components/table/AssessmentSubmissions.vue";
export default {
  components: { AssessmentSubmissions },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions("assessments", ["view"]),
  },
  beforeMount() {
    this.view(this.id);
  },
};
</script>

<style></style>
