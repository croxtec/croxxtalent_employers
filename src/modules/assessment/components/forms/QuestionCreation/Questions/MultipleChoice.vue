<template>
      <validation-observer  ref="form" v-slot="{ invalid }">
          <div class="question-item">
            <div class="headline">
              <h6>This is a multiple choice Question</h6>
            </div>
        
            <div class="main-header">
              <h6>Question {{ questions.length + 1 }}</h6>
            </div>
        
            <div class="question">
              <h6>What would like to ask?</h6>
            </div>
        
            <!-- <div>
              {{ questions }}
            </div> -->
        
            <div class="choices">
              <validation-provider v-slot="validationContext" vid="question"  name="question" rules="required|min:10|max:100">
                    <input
                      type="text"
                      class="question-input"
                      placeholder="What is your question?"
                      v-model="payload.question"
                    />
                    <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
                <validation-provider v-slot="validationContext" vid="optiont1"  name="optiont1" rules="required|min:2|max:50">
                    <span class="d-flex align-items-center w-75" style="gap: 10px">
                      <input type="text" class="answer-choice" v-model="payload.option1" placeholder="Enter Option" />
                      <!-- <span> <i-icon icon="solar:close-circle-bold" class="delete-response"/>  </span> -->
                    </span>
                    <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
                <validation-provider v-slot="validationContext" vid="optiont1"  name="optiont1" rules="required|min:2|max:50">
                  <span class="d-flex align-items-center w-75" style="gap: 10px">
                    <input type="text" class="answer-choice" v-model="payload.option2" placeholder="Enter Option" />
                    <!-- <span> <i-icon icon="solar:close-circle-bold" class="delete-response"/>  </span> -->
                  </span>
                  <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
                <validation-provider v-slot="validationContext" vid="optiont1"  name="optiont1" rules="required|min:2|max:50">
                  <span class="d-flex align-items-center w-75" style="gap: 10px">
                    <input type="text" class="answer-choice" v-model="payload.option3" placeholder="Enter Option" />
                    <!-- <span> <i-icon icon="solar:close-circle-bold" class="delete-response"/>  </span> -->
                  </span>
                  <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
                <validation-provider v-slot="validationContext" vid="optiont1"  name="optiont1" rules="required|min:2|max:50">
                <span class="d-flex align-items-center w-75" style="gap: 10px">
                  <input type="text" class="answer-choice" v-model="payload.option4" placeholder="Enter Option" />
                  <!-- <span> <i-icon icon="solar:close-circle-bold" class="delete-response"/>  </span> -->
                </span>
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
            </div>
        
            
            <div class="footer-data d-flex align-items-center" style="gap: 20px">
              <button class="button outline-btn"  @click="prev">Prev</button>
              <button class="button primary-btn" :disabled="invalid" :class="{ 'bg-secondary': invalid}"  @click="addQuestion">Add Question</button>
              <button class="button outline-btn"  @click="next">Next</button>
            </div>
          </div>
      </validation-observer>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      payload: {
        type: "checkbox",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      },
    };
  },
  methods: {
    addQuestion(){
      console.log(this.payload);
      console.log(this.questions)
      this.$store.commit('assessmentDetails/SET_QUESTIONS', this.payload)
      this.payload = {
        type: "checkbox",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      }
    },
    next() {
      this.$store.commit("assessmentHeader/NEXT_EL", 3);
    },
    prev() {
      this.$store.commit("assessmentHeader/SET_ACTIVE_EL", 1);
    },
  },  
  computed: {
    questions(){
      return this.$store.getters["assessmentDetails/getQuestions"]
    }
  },
};
</script>

<style scoped>
.headline {
  background: var(--tertiary-50);
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
.answer-choice,
.question-input {
  border: 1px solid var(--primary-200);
  width: 100%;
  border-radius: 18px;
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
  gap: 20px;
  align-items: center;
}
</style>
