<template>
  <validation-observer  ref="form" v-slot="{ invalid }">
  
    <div class="form-data">
      <div
        class="d-flex align-items-center"
        style="gap: 20px"
        v-if="details.category === 'job specific'"
      >
        <span class="label">Assign Job Title</span>
        <!-- <div>
          {{ job_codes }}
        </div> -->
        <validation-provider v-slot="validationContext" vid="assign_manager"  name="Assign manager" rules="required">
          <div class="w-100">
            <select name="" id="" class="" v-model="job_code_id">
              <option value="" selected disable>Select job title</option>
              <option :value="item.id" v-for="item in job_codes" :key="item.id">
                {{ item.job_title }}
              </option>
            </select>
          </div>
          <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
        </validation-provider>
      </div>
      <!-- <div>
        {{ details }}
      </div> -->
      <div v-else>
        <validation-provider v-slot="validationContext" vid="employees"  name="Employees" rules="required">
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
              <small class="text-danger my-2" v-text="errors[0]"></small>
            </div>
            <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
          </div>
        </validation-provider>
        <hr style="border-color: var(--primary-200)" />
        <validation-provider v-slot="validationContext" vid="employees"  name="Employees" rules="required">
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
          <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
        </validation-provider>
      </div>
  
      <div class="footer-data d-flex align-items-center" style="gap: 20px">
        <button class="button outline-btn"  @click="prev">Prev</button>
        <button :disabled="invalid"  @click="submit" class="primary-btn button">Submit</button>
      </div>
    </div>
  </validation-observer>
    
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
    prev() {
      this.$store.commit("assessmentHeader/SET_ACTIVE_EL", 2);
    },
    submit() {
      let data = {
        domain_id: this.details.domain,
        core_id: this.details.core,
        skill_id: this.details.skill,
        level: this.details.level,
        name: this.details.assessment_name,
        category: this.details.category,
        delivery_type: this.details.delivery,
        questions: this.questions,
      };
      let specific = {
        job_code_id: Number(this.job_code_id)
      }
      let generic =  {
        candidates: this.value1,
        managers: this.value2,
      }
      let generic_payload = Object.assign(data, generic)
      let specific_payload = Object.assign(data, specific)
      this.create(
        this.details.category === "generic" ? generic_payload : specific_payload
      )
      console.log(specific_payload, generic_payload);
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
