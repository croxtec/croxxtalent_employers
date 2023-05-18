<template>
  <div class="form-data">
    <div
      class="d-flex align-items-center"
      style="gap: 20px"
      v-if="details.category === 'job-specific'"
    >
      <span class="label">Assign Job Title</span>
      <div class="w-100">
        <select name="" id="" class="">
          <option value="" selected disable>Select job title</option>
          <option value="" v-for="item in results" :key="item.id">
            {{ item.job_title }}
          </option>
        </select>
      </div>
    </div>
    <!-- <div>
      {{ details }}
    </div> -->
    <div v-else>
      <div class="d-flex align-items-center" style="gap: 20px">
        <span class="label">Assign Candidates</span>

        <div class="w-100">
          <el-select v-model="value1" multiple placeholder="Select Employees">
            <el-option
              v-for="item in employees"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <hr style="border-color: var(--primary-200)" />
      <div class="d-flex align-items-center" style="gap: 20px">
        <span class="label">Assign Manager</span>
        <div class="w-100">
          <el-select v-model="value2" multiple placeholder="Select Managers">
            <el-option
              v-for="item in employees"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="mt-2 text-center">
      <button @click="submit" class="primary-btn button">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      value1: [],
      value2: [],
      job_code_id: null,
    };
  },
  methods: {
    ...mapActions("job_codes", ["list"]),
    ...mapActions("assessments", ["create"]),
    submit() {
      let specific_payload = {
        domain_id: this.details.domain,
        core_id: this.details.core,
        skill_id: this.details.skill,
        level: this.details.level,
        name: this.details.assessment_name,
        category: this.details.category,
        delivery_type: this.details.delivery,
        questions: this.questions,
        job_code_id: Number(this.job_code_id)
      };
      let generic_payload = {
        domain_id: this.details.domain,
        core_id: this.details.core,
        skill_id: this.details.skill,
        level: this.details.level,
        name: this.details.assessment_name,
        category: this.details.category,
        delivery_type: this.details.delivery,
        questions: this.questions,
        candidates: this.value1,
        managers: this.value2,
      };
      this.create(
        this.details.category === "generic" ? generic_payload : specific_payload
      )
      console.log(this.details, this.questions, this.value1, this.value2);
    },
  },
  beforeMount() {
    this.list();
    this.$store.dispatch("employees/list");
  },
  computed: {
    ...mapState("assessmentDetails", {
      details: (state) => state.details,
      questions: (state) => state.questions,
    }),
    ...mapState("job_codes", {
      job_codes: (state) => state.results,
    }),
    ...mapState("employees", {
      employees: (state) => state.results,
    }),
  },
};
</script>

<style>
.label {
  width: 40%;
  font-size: 13px;
  display: block;
  font-weight: 500;
}
.assigned-list {
  border: 1px solid var(--primary-200);
  width: 100%;
  padding: 10px;
  border-radius: 20px;
}

.el-select {
  width: 100% !important;
  border: 1px solid var(--primary-200);
  /* padding: 10px; */
  border-radius: 20px;
  padding: 5px;
}

.el-input--suffix .el-input__inner {
  border: 0;
  background: transparent;
}
.el-input__inner {
  width: 100% !important;
  border: 0 !important;
  background-color: transparent !important;
}

.el-tag.el-tag--info {
  background: var(--primary-50);
  border: none;
  color: var(--primary-500);
  font-weight: 500;
  font-size: 12px;
  border-radius: 15px;
}

.el-tag.el-tag--info .el-tag__close {
  color: var(--primary-500);
}

.el-select .el-tag__close.el-icon-close {
  background-color: transparent;
}
.assignee {
  display: flex;
  background: var(--primary-50);
  border-radius: 15px;
  padding: 5px 12px;
  font-size: 12px;
  color: var(--primary-500);
  font-weight: 500;
  width: max-content;
  gap: 8px;
}
</style>
