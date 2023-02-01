<template>
  <div>
    <app-header />
    <our-mission />
    <how-it-works />
    <looking-for-talent />
    <mailing-list />
  </div>
</template>

<script>
import AppHeader from "../about/components/AppHeader.vue";
import HowItWorks from "../home/components/HowItWorks.vue";
import LookingForTalent from "../home/components/LookingForTalent.vue";
import MailingList from "../home/components/MailingList.vue";
import OurMission from "../home/components/OurMission.vue";
export default {
  components: {
    AppHeader,
    HowItWorks,
    LookingForTalent,
    MailingList,
    OurMission,
  },
};
</script>

OurMission
