<template>
  <div class="question-item">
    <div class="headline">
      <h6>These are the instructions</h6>
    </div>

    <div class="main-header">
      <h6>Instruction 1</h6>
    </div>

    <div class="question">
      <h6>What would like to say about this section </h6>
    </div>

    <div class="description">
      <p>This test  will help us know the extent of your knowledge on the first stages of the surface cementing skill, its processes, techniques and the soft skills needed to achieve success. Answer question 1-5 correctly. Good luck</p>
    </div>

    <div class="footer-data d-flex align-items-center" style="gap:20px">
      <button class="button primary-btn">Another Instruction</button>
      <button class="button outline-btn" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    next(){
      this.$store.commit('assessmentHeader/NEXT_ITEM')
    }
  }
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

  .description {
    border: 1px solid var(--primary-200);
    width: 70%;
    border-radius: 15px;
    padding: 18px;
    margin: 0 auto;
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