<template>
  <div>
    <AppHeader />
    <OurMission />
    <LookingForTalent />
    <HowItWorks />
    <OurVision />
    <MailingList />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import OurMission from "./components/OurMission.vue";
import LookingForTalent from "./components/LookingForTalent.vue";
import HowItWorks from "./components/HowItWorks.vue";
import OurVision from "./components/OurVision.vue";
import MailingList from "./components/MailingList.vue";
export default {
  components: {
    AppHeader,
    OurMission,
    LookingForTalent,
    HowItWorks,
    OurVision,
    MailingList,
  },
};
</script>
