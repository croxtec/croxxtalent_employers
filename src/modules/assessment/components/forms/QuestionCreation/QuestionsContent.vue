<template>
  <div>
    <questions-instructions v-if="activeEl === 1"/>
    <single-choice v-if="activeEl === 2"/>
    <multiple-choice v-if="activeEl === 3"/>
    <open-ended v-if="activeEl === 4"/>
    <file-upload-questions v-if="activeEl === 5"/>
    <link-upload-questions v-if="activeEl === 6" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FileUploadQuestions from './Questions/fileUploadQuestions.vue'
import LinkUploadQuestions from './Questions/linkUploadQuestions.vue'
import MultipleChoice from './Questions/MultipleChoice.vue'
import OpenEnded from './Questions/OpenEnded.vue'
import QuestionsInstructions from './Questions/QuestionsInstructions.vue'
import SingleChoice from './Questions/SingleChoice.vue'
export default {
  components: { QuestionsInstructions, MultipleChoice, OpenEnded, SingleChoice, FileUploadQuestions, LinkUploadQuestions },
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