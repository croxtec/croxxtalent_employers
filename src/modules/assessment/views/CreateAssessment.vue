<template>
  <div id="create-assessment">
    <CreateAssessmentHeader />
    <div class="mt-4">
        <div class="form-content" v-if="activeEl !== 2">
          <AssessmentDetails @next="goToNext" v-if="activeEl === 1"/>
          <AssessmentConfiguration v-if="activeEl === 3"/>
        </div>
        <QuestionCreationHome v-if="activeEl === 2"/>
      </div>
    <!-- <button class="primary-btn" @click="goToNext">next</button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AssessmentDetails from '../components/forms/AssessmentDetails.vue';
import AssessmentConfiguration from '../components/forms/AssessmentConfiguration.vue';
import QuestionCreationHome from '../components/forms/QuestionCreation/QuestionCreationHome.vue';
import CreateAssessmentHeader from "../components/static/CreateAssessmentHeader.vue";
export default {
  components: { CreateAssessmentHeader, AssessmentDetails, AssessmentConfiguration, QuestionCreationHome },
  methods: {
    ...mapActions("config", ["getDomains"]),
    goToNext() {
      this.$store.commit("assessmentHeader/NEXT_EL")
    },
  },
  beforeMount(){
    this.getDomains()
  },
  computed: {
    ...mapState('assessmentHeader', {
        activeEl: (state) => state.activeEl
    })
  },
};
</script>

<style></style>
