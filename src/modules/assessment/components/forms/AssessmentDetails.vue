<template>
  <div>
    <validation-observer  ref="form" v-slot="{ invalid, handleSubmit }">
      <form class="form-data" @submit.prevent="handleSubmit(goToNext)">
        <div class="d-flex align-items-center" style="gap: 20px">
          <div class="w-100">
            <validation-provider v-slot="validationContext" vid="domain_id"  name="domain" rules="required">
              <label for="">Domain <span class="text-danger">*</span></label>
              <select @change="selectDomain" v-model="domain" id="mySelect">
                <option value="" selected disabled>Select  Domain</option>
                <option :value="item.id" v-for="item in domains" :key="item.id">
                  {{ item.name }}
                </option>
              </select>
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
            </validation-provider>
          </div>

          <div class="w-100">
            <validation-provider v-slot="validationContext" vid="core_id"  name="core" rules="required">
              <label for="">Core <span class="text-danger">*</span></label>
              <select @change="selectCore" v-model="core" id="mySelect2">
                <option value="" selected disabled>Select Core</option>
                <option :value="item.id" v-for="item in cores" :key="item.id">
                  {{ item.name }}
                </option>
              </select>
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
            </validation-provider>
          </div>
        </div>

        <div class="d-flex align-items-center" style="gap: 20px">
          <div class="w-100">
            <validation-provider v-slot="validationContext" vid="skill_id"  name="skill" rules="required">
              <label for="">Skill <span class="text-danger">*</span></label>
              <select v-model="skill" id="mySelect3">
                <option value="" selected disabled>Select Core</option>
                <option :value="item.id" v-for="item in skills" :key="item.id">
                  {{ item.name }}
                </option>
              </select>
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
            </validation-provider>
          </div>
          <div class="w-100">
            <validation-provider v-slot="validationContext" vid="core_id"  name="core" rules="required">
              <label for="">Level <span class="text-danger">*</span></label>
              <select v-model="level">
                <option value="" selected disabled>Select Level</option>
                <option :value="item.value" v-for="item in levels" :key="item.id">
                  {{ item.name }}
                </option>
              </select>
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
            </validation-provider>
          </div>
        </div>

        <hr style="border-color: var(--primary-200)" />

        <div class="d-flex align-items-center" style="gap: 20px">
          <div class="w-100">
            <validation-provider v-slot="validationContext" vid="assessment_name"  name="Assessment Name" rules="required|min:5|max:50">
              <label for=""
                >Assessment Name <span class="text-danger">*</span></label
              >
              <input
                type="text"
                v-model="assessment_name"
                placeholder="Assessment Name"
              />
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
            </validation-provider>
          </div>
          <div class="w-100">
            <validation-provider v-slot="validationContext" vid="categories"  name="categories" rules="required">
              <label for="">Categories <span class="text-danger">*</span></label>
              <select v-model="category">
                <option value="" selected disabled>Select Category</option>
                <option
                  :value="item.value"
                  v-for="item in categories"
                  :key="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
            </validation-provider>
          </div>
        </div>
        <div class="d-flex align-items-center" style="gap: 20px">
          <div class="w-100">
            <label for="">Delivery Type <span class="text-danger">*</span></label>
            <select v-model="delivery">
              <option value="" selected disabled>Select Delivery Type</option>
              <option
                :value="item.value"
                v-for="item in delivery_type"
                :key="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="w-100">
            <label for=""
              >Validity Period </label>
            <select>
              <option value="" selected disabled>Select Validity Period</option>
              <option value="valid">Valid</option>
              <option value="not valid">Not Valid</option>
            </select>
          </div>
        </div>
        <div>
          <validation-provider v-slot="validationContext" vid="description"  name="description" rules="required|min:15|max:500">
              <label for=""
                >Description <span class="text-danger">*</span></label>
              <textarea
                name=""
                id="" cols="30" rows="6"
                placeholder="Assesment Description"
                v-model="description"></textarea>
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
          </validation-provider>
        </div>
        <div class="mt-2 text-center">
          <button
            :disabled="invalid"
            :class="{ 'bg-secondary': invalid }"
            class="primary-btn button"
            style="width: max-content"
          >
            Next
          </button>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
        skill: null,
        core: null,
        delivery: "",
        level: "",
        assessment_name: "",
        category: "",
        domain: "",
        description: ""
    };
  },
  methods: {
    ...mapActions('config', ['getSkills', 'getCores']),
    selectDomain() {
      // var priceOptions = document.getElementById("mySelect");
      // var selOption = priceOptions.options[priceOptions.selectedIndex].value;
      this.getCores(this.domain)
    },
    selectCore(){
      this.getSkills(this.core)
    },
    goToNext() {
      let payload = {
        skill: this.skill,
        core: this.core,
        delivery: this.delivery,
        level: this.level,
        assessment_name: this.assessment_name,
        category: this.category,
        domain: this.domain,
        description: this.description
      };
      this.$store.commit("assessmentDetails/SET_DETAILS", payload);
      this.$emit("next");
    },
  },
  computed: {
    ...mapState("config", {
      domains: (state) => state.domains,
      levels: (state) => state.levels,
      delivery_type: (state) => state.delivery_type,
      categories: (state) => state.categories,
      cores: (state) => state.cores,
      skills: (state) => state.skills
    }),
    ...mapState("assessmentDetails", {
      details: (state) => state.details,
    }),
    // skill: {
    //   get() {
    //     return this.details.skill;
    //   },
    //   set(newValue) {
    //     this.dataObj.skill = newValue;
    //   },
    // },
    // domain: {
    //   get() {
    //     return this.details.domain.name;
    //   },
    //   set(newValue) {
    //     // this.dataObj.domain = newValue;
    //     this.$store.commit('assessmentDetails/SET_DOMAIN', newValue)
    //   },
    // },
    // core: {
    //   get() {
    //     return this.details.core.name;
    //   },
    //   set(newValue) {
    //     this.dataObj.core = newValue;
    //   },
    // },
    // delivery: {
    //   get() {
    //     return this.details.delivery;
    //   },
    //   set(newValue) {
    //     this.dataObj.delivery = newValue;
    //   },
    // },
    // level: {
    //   get() {
    //     return this.details.level;
    //   },
    //   set(newValue) {
    //     this.dataObj.level = newValue;
    //   },
    // },
    // assessment_name: {
    //   get() {
    //     return this.details.assessment_name;
    //   },
    //   set(newValue) {
    //     this.dataObj.assessment_name = newValue;
    //   },
    // },
    // category: {
    //   get() {
    //     return this.details.category;
    //   },
    //   set(newValue) {
    //     this.dataObj.category = newValue;
    //   },
    // },
  },
};
</script>

<style></style>
