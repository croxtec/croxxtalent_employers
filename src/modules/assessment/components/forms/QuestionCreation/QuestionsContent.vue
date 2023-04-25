<template>
  <div>
    <questions-instructions v-if="activeEl === 1"/>
    <single-choice v-if="activeEl === 2"/>
    <multiple-choice v-if="activeEl === 3"/>
    <open-ended v-if="activeEl === 4"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MultipleChoice from './Questions/MultipleChoice.vue'
import OpenEnded from './Questions/OpenEnded.vue'
import QuestionsInstructions from './Questions/QuestionsInstructions.vue'
import SingleChoice from './Questions/SingleChoice.vue'
export default {
  components: { QuestionsInstructions, MultipleChoice, OpenEnded, SingleChoice },
  computed: {
          ...mapState('assessmentHeader', {
              activeEl: (state) => state.activeItem,
              questionsHeader: (state) => state.questionsHeader
          })
      }
}
</script>

e<style>

</style>