<template>
  <div id="create-campaign" class="spacer">
    <div>
      <div class="form-steps">
        <div class="step-items" v-for="(item, index) in steps" :key="index">
          <span class="step-level text-uppercase">{{ "step " + item.id }}</span>
          <span class="step-title">{{ item.name }}</span>
          <span
            class="step-status"
            :class="stepNum + 1 > item.id ? 'completed' : 'pending'"
            >{{ stepNum + 1 > item.id ? "Completed" : "Pending" }}</span
          >
        </div>
      </div>
      <validation-observer  ref="form" v-slot="{ invalid, handleSubmit }">
        <form @submit.prevent="handleSubmit(onComplete)"
          class="form-content mt-4">
          <div class="mt-3">
            <div class="form-data">
              <div v-if="stepNum === 1">
                <div class="main-data">
                  <h5 class="form-header text-center">Campaign Information</h5>
                  <div>
                    <label for=""
                      >Campaign Title <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      placeholder="Campaign Title"
                      v-model="dataObject.title"
                    />
                  </div>
                  <div>
                    <label for=""
                      >Industry <span class="text-danger">*</span></label
                    >
                    <select name="industry" v-model="dataObject.industry_id">
                      <option value="-" selected disabled>Select Industry</option>
                      <option
                        v-for="(item, index) in industries"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label for=""
                      >Job Title <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      placeholder="Enter Job Title"
                      v-model="dataObject.job_title"
                    />
                  </div>
                  <div>
                    <label for=""
                      >Work Type <span class="text-danger">*</span></label
                    >
                    <select name="work-type" v-model="dataObject.work_type">
                      <option value="-" selected disabled>
                        Select Work Type
                      </option>
                      <option value="full_time">Full Time</option>
                      <option value="part_time">Part Time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>
                </div>
              </div>
              <div v-if="stepNum === 2" class="main-data">
                <h5 class="form-header text-center">Competency</h5>
                <div>
                  <label for="">Domain <span class="text-danger">*</span></label>
                  <select v-model="dataObject.domain_id" @change="getCoreList">
                    <option value="-" selected disabled>Select Domain</option>
                    <option
                      v-for="(item, index) in domains"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="">Core <span class="text-danger">*</span></label>
                  <select v-model="dataObject.core_id" @change="getSkillList">
                    <option value="-" selected disabled class="selected">
                      Select Core
                    </option>
                    <option
                      v-for="(item, index) in cores"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="">Skill <span class="text-danger">*</span></label>
                  <el-select
                    v-model="dataObject.skill_ids"
                    multiple
                    placeholder="Select Course of Study"
                  >
                    <el-option
                      v-for="item in skills"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div v-if="stepNum === 3" class="main-data">
                <h5 class="form-header text-center">Other Details</h5>
                <div>
                  <label for=""
                    >Course of Study <span class="text-danger">*</span></label
                  >
                  <el-select
                    v-model="dataObject.course_of_study_ids"
                    multiple
                    placeholder="Select Course of Study"
                  >
                    <el-option
                      v-for="item in course_of_studies"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <label for=""
                    >Maximum Degree Requirement
                    <span class="text-danger">*</span></label
                  >
                  <select v-model="dataObject.minimum_degree_id">
                    <option value="-" selected disabled class="selected">
                      Select Qualification
                    </option>
                    <option
                      v-for="(item, index) in degrees"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for=""
                    >Language <span class="text-danger">*</span></label
                  >
                  <el-select
                    v-model="dataObject.language_ids"
                    multiple
                    placeholder="Select Language"
                  >
                    <el-option
                      v-for="item in languages"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <label for=""
                    >Salary Currency <span class="text-danger">*</span></label
                  >
                  <select v-model="dataObject.currency_code">
                    <option value="-" selected disabled>Select Currency</option>
                    <option value="NGN">Nigerian Naira</option>
                    <option value="USD">US Dollar</option>
                  </select>
                </div>
                <div class="d-flex align-items-center" style="gap: 6px">
                  <label for=""
                    >Make Salary Confidential
                    <span class="text-danger">*</span></label
                  >
                  <div>
                    <el-switch
                      v-model="dataObject.is_confidential_salary"
                    ></el-switch>
                  </div>
                </div>
                <div class="d-flex align-items-center" style="gap: 20px">
                  <div>
                    <label for=""
                      >Minimum Salary <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      v-model="dataObject.min_salary"
                      placeholder="Input Amount"
                    />
                  </div>
                  <div>
                    <label for=""
                      >Maximum Salary <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      v-model="dataObject.max_salary"
                      placeholder="Input Amount"
                    />
                  </div>
                </div>
              </div>
              <div v-if="stepNum === 4" class="main-data">
                <h5 class="form-header text-center">Availability</h5>
                <div>
                  <label for=""
                    >Years of Experience <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    placeholder="Years of experience"
                    v-model="dataObject.years_of_experience"
                  />
                </div>
                <div>
                  <label for=""
                    >Available Openings <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    placeholder="Available positions"
                    v-model="dataObject.number_of_positions"
                  />
                </div>
                <div>
                  <label for=""
                    >Deadline to opening <span class="text-danger">*</span></label
                  >
                  <input
                    type="date"
                    v-model="dataObject.expire_at"
                    placeholder="Select date"
                  />
                </div>
                <div>
                  <label for="">Country <span class="text-danger">*</span></label>
                  <select v-model="dataObject.country_code">
                    <option value="-" selected disabled>Select Country</option>
                    <option
                      v-for="(item, index) in countries"
                      :key="index"
                      :value="item.code"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="">State <span class="text-danger">*</span></label>
                  <select v-model="dataObject.state_id">
                    <option value="-" selected disabled>Select State</option>
                    <option
                      v-for="(item, index) in states"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="">City<span class="text-danger">*</span></label>
                  <input
                    type="text"
                    v-model="dataObject.city"
                    placeholder="Enter City"
                  />
                </div>
              </div>
              <div v-if="stepNum === 5" class="main-data">
                <h5 class="form-header text-center">Summary</h5>
                <div>
                  <label for="">Summary <span class="text-danger">*</span></label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="6"
                    placeholder="Input Summary"
                    v-model="dataObject.summary"
                  ></textarea>
                </div>
                <div>
                  <label for=""
                    >Description <span class="text-danger">*</span></label
                  >
                  <vue-editor v-model="dataObject.description" />
                </div>
                <div class="d-flex align-items-center" style="gap: 6px">
                  <label for=""
                    >Manage by Croxxtalent?
                    <span class="text-danger">*</span></label
                  >
                  <div>
                    <el-switch v-model="dataObject.is_managed"></el-switch>
                  </div>
                </div>
                <div>
                  <label for=""
                    >Select Campaign photo
                    <span class="text-danger">*</span></label
                  >
                  <input type="file" @change="addPhoto($event)" />
                </div>
              </div>
            </div>
            <div class="step-buttons spacer pt-0">
              <button
                class="outline-btn button"
                :disabled="stepNum <= 1"
                @click="navigateSteps('prev')"
              >
                Back
              </button>
              {{ invalid }}
              <button class="primary-btn button" @click="navigateSteps('next')">
                {{ stepNum === steps.length ? "Finish" : "Next Step" }}
              </button>
            </div>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
// import campaignSteps from "@/api/campaign";
import { mapState, mapActions } from "vuex";
export default {
  components: {},

  data() {
    return {
      stepNum: 1,

      steps: [
        {
          id: 1,
          name: "Campaign Information",
          url: "/create-cv",
          status: "completed",
        },

        {
          id: 2,
          name: "Competency",
          url: "/create-cv",
          status: "pending",
        },

        {
          id: 3,
          name: "Other Details",
          url: "/create-cv",
          status: "pending",
        },

        {
          id: 4,
          name: "Availability",
          url: "/create-cv",
          status: "pending",
        },

        {
          id: 5,
          name: "Summary",
          url: "/create-cv",
          status: "pending",
        },
      ],

      dataObject: {
        title: null,
        industry_id: null,
        job_title: null,
        domain_id: null,
        core_id: null,
        skill_ids: [],
        course_of_study_ids: [],
        language_ids: [],
        work_type: null,
        minimum_degree_id: null,
        is_confidential_salary: false,
        currency_code: null,
        min_salary: null,
        max_salary: null,
        number_of_positions: null,
        years_of_experience: null,
        expire_at: null,
        city: null,
        state_id: null,
        country_code: null,
        summary: null,
        description: null,
        photo: null,
        is_managed: false,
      },
    };
  },

  methods: {
    ...mapActions("campaigns", ["add", "list"]),
    ...mapActions("config", [
      "getCountries",
      "getStates",
      "getCourses",
      "getDegrees",
      "getLanguages",
      "getDomains",
      "getSkills",
      "getCores",
      "getIndustries",
    ]),

    navigateSteps(value) {
      value === "next" ? this.next() : this.prev();
    },

    prev() {
      this.stepNum--;
    },

    next() {
      if (this.stepNum === this.steps.length) {
        this.onComplete();
      } else {
        this.stepNum++;
      }
    },

    onComplete() {
      this.add(this.dataObject).then(() => {
        this.list();
        this.resetForm()
      });
    },

    resetForm() {
      this.dataObject = {
          title: null,
          industry_id: null,
          job_title: null,
          domain_id: null,
          core_id: null,
          skill_ids: [],
          course_of_study_ids: [],
          language_ids: [],
          work_type: null,
          minimum_degree_id: null,
          is_confidential_salary: false,
          currency_code: null,
          min_salary: null,
          max_salary: null,
          number_of_positions: null,
          years_of_experience: null,
          expire_at: null,
          city: null,
          state_id: null,
          country_code: null,
          summary: null,
          description: null,
          photo: null,
          is_managed: false,
        };
    },

    getCoreList() {
      this.getCores(this.dataObject.domain_id);
    },

    getSkillList() {
      this.getSkills(this.dataObject.core_id);
    },

    addPhoto() {
      const input = event.target;
      this.dataObject.photo = input.files[0];
      console.log(this.dataObject.photo);
    },
  },

  beforeMount() {
    this.getCountries();
    this.getStates();
    this.getCourses();
    this.getDegrees();
    this.getLanguages();
    this.getDomains();
    this.getIndustries();
  },

  computed: {
    ...mapState("config", {
      countries: (state) => state.countries,
      states: (state) => state.states,
      course_of_studies: (state) => state.course_of_studies,
      degrees: (state) => state.degrees,
      languages: (state) => state.languages,
      domains: (state) => state.domains,
      skills: (state) => state.skills,
      cores: (state) => state.cores,
      industries: (state) => state.industries,
    }),
  },
};
</script>

<style>
.main-data {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 15px;
}

.assigned-list {
  border: 1px solid var(--primary-200);
  width: 100%;
  padding: 5px;
  border-radius: 50px;
}

.el-select {
  width: 100% !important;
  border: 1px solid var(--primary-200);
  border-radius: 50px;
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
  padding: 5px 8px;
  font-size: 12px;
  color: var(--primary-500);
  font-weight: 500;
  width: max-content;
  gap: 8px;
}
</style>
