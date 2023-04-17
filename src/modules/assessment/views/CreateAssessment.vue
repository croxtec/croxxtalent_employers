<template>
  <div id="create-assessment">
    <CreateAssessmentHeader />
    <div class="mt-4">
        <div class="form-content " v-if="activeEl !== 2">
          <AssessmentDetails v-if="activeEl === 1"/>
          <AssignManager v-if="activeEl === 3"/>
          <div class="step-buttons spacer pt-0">
          <!-- <button class="outline-btn button" @click="prev">Back</button> -->
          <button class="primary-btn button" @click="goToNext">next</button>
        </div>
        </div>
        <QuestionCreationHome v-if="activeEl === 2"/>
       
      </div>
    <!-- <button class="primary-btn" @click="goToNext">next</button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import AssessmentDetails from '../components/forms/AssessmentDetails.vue';
import AssignManager from '../components/forms/AssignManager.vue';
import QuestionCreationHome from '../components/forms/QuestionCreation/QuestionCreationHome.vue';
import CreateAssessmentHeader from "../components/static/CreateAssessmentHeader.vue";
export default {
  components: { CreateAssessmentHeader, AssessmentDetails, AssignManager, QuestionCreationHome },
  methods: {
    // ...mapActions("assessmentHeader", ["next", "prev"]),
    goToNext() {
      this.$store.commit("assessmentHeader/NEXT_EL")
    },
  },
  computed: {
    ...mapState('assessmentHeader', {
        activeEl: (state) => state.activeEl
    })
  },
};
</script>

<style></style>
