<template>
  <div id="questions-container" class="mt-4">
    <QuestionsSideBar class="side-area" />
    <div class="main-area">
      <QuestionsHeader />
      <QuestionsContent class="mt-4" />
    </div>
  </div>
</template>

<script>
import QuestionsContent from "./QuestionsContent.vue";
import QuestionsHeader from "./QuestionsHeader.vue";
import QuestionsSideBar from "./QuestionsSideBar.vue";

export default {
  components: { QuestionsHeader, QuestionsSideBar, QuestionsContent },
};
</script>

<style scoped>
#questions-container {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 20px;
}

#questions-container .side-area {
  width: 25%;
}

#questions-container .main-area {
  width: 100%;
}

#questions-container .side-area {
  border: 1px solid var(--primary-200);
  border-radius: 25px;
  padding: 25px 10px;
}
#questions-container .main-area {
  border: 1px solid var(--primary-200);
  border-radius: 25px;
  padding: 25px;
}
</style>
