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
      <div class="form-content mt-4">
        <div class="mt-3">
          <CampaignInformation v-if="stepNum === 1"/>
          <CompetencyInformation v-if="stepNum === 2"/>
          <OtherDetails v-if="stepNum === 3"/>
          <Availability v-if="stepNum === 4"/>
          <CampaignSummary v-if="stepNum === 5"/>
        </div>
        <div class="step-buttons spacer pt-0">
          <button class="outline-btn button" @click="prev">Back</button>
          <button class="primary-btn button" @click="next">Next Step</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import campaignSteps from "@/api/campaign";
import CampaignInformation from "../components/forms/create-campaign/CampaignInformation.vue";
import CompetencyInformation from "../components/forms/create-campaign/CompetencyInformation.vue";
import OtherDetails from "../components/forms/create-campaign/OtherDetails.vue";
import Availability from "../components/forms/create-campaign/Availability.vue";
import CampaignSummary from "../components/forms/create-campaign/CampaignSummary.vue";
export default {
  components: {
    CampaignInformation,
    CompetencyInformation,
    OtherDetails,
    Availability,
    CampaignSummary,
  },
  data() {
    return {
      steps: campaignSteps,
      stepNum: 1,
    };
  },
  methods: {
    prev() {
      if (this.stepNum > 1) {
        this.stepNum--;
      }
    },
    next() {
      if (this.stepNum < this.steps.length) {
        this.stepNum++;
      }
    },
  },
};
</script>

<style></style>
