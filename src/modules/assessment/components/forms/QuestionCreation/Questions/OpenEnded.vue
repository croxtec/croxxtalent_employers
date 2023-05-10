<template>
  <div class="question-item">
    <div class="headline">
      <h6>This is an open ended Question</h6>
    </div>

    <div class="main-header">
    <h6>Question 1</h6>
  </div>

  <div class="question">
    <h6>What would like to ask? </h6>
  </div>

  <div class="choices">
    <input type="text" class="question-input">
    <input type="text" class="answer-choice" placeholder="Answer goes here">
  </div>

  <div class="footer-data d-flex align-items-center" style="gap:20px">
    <button class="button primary-btn">Another Question</button>
    <button class="button outline-btn">Next</button>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .headline {
    background: var(--tertiary-50) ;
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 100%;
  }
  .headline h6 {
    font-weight: 400;
    font-size: 14px;
  }

  
.main-header h6 {
  color: var(--primary-500);
  font-weight: 600;
}

.question h6 {
  font-weight: 500;
  font-size: 14px;
}

.choices {
  width: 70%;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 15px;
  flex-direction: column;
}
.answer-choice, .question-input {
  border: 1px solid var(--primary-200);
  width: 100%;
  border-radius: 15px;
  padding: 13px;
  margin: 0 auto;
}

.answer-choice {
  padding: 10px;
 
}

.delete-response {
  color: var(--gray-300);
  font-size: 28px;
}

.description p {
  font-size: 14px;
  margin: 0;
}

.question-item {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
</style>