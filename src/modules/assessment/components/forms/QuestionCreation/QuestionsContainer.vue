<template>
  <div id="questions-container" class="mt-4">
    <QuestionsSideBar class="side-area"/>
    <div class="main-area">
      <QuestionsHeader/>
      <QuestionsContent/>
    </div>
  </div>
</template>

<script>
import QuestionsContent from './QuestionsContent.vue';
import QuestionsHeader from './QuestionsHeader.vue';
import QuestionsSideBar from './QuestionsSideBar.vue';

export default {
    components: { QuestionsHeader, QuestionsSideBar, QuestionsContent }
}
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

  #questions-container .side-area,  #questions-container .main-area {
    border: 1px solid var(--primary-200);
   border-radius: 10px;
   padding: 25px;
  }
</style>