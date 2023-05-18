<template>
  <div>
   <div class="all-questions">
    <div class="question-list" v-for="(item, index) in questions" :key="index">
      <span class="question-label">{{ "Q"+(index+1) }}</span>
      <p>{{ item.question }}</p>
    </div>
   </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("assessmentDetails", {
      questions: (state) => state.questions
    }),
  },
};
</script>

<style scoped>

.all-questions {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 10px;
  flex-direction: column;
}
.question-list {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 10px;
  align-items: center;
}

.question-list p {
  font-size: 12px;
  margin-bottom: 0px;
}

.question-label {
  background: var(--primary-500);
  padding: 10px 14px;
  color: var(--white);
  font-weight: 500;
  display: block;
  border-radius: 20px;
  font-size: 14px;
}
</style>
