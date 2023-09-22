<template>
  <div class="spacer">
    <div>
      <search-filter>
        <template #filterBody>
          <talents-filter />
        </template>
      </search-filter>
      <h3 class="tw-font-bold tw-text-xl tw-my-4">Top Talents</h3>
    </div>
    <div class="tw-grid tw-grid-cols-4 tw-gap-4">
      <talent-card v-for="item in 8" :key="item" />
    </div>
  </div>
</template>

<script>
import TalentCard from "@/components/cards/talentCard.vue";
import SearchFilter from '@/components/utils/SearchFilter.vue';
import TalentsFilter from '@/components/dashboard/TalentsFilter.vue';
export default {
  props: ["trainingCount"],
  components: {
    TalentCard, SearchFilter,
    TalentsFilter
  },
};
</script>
    

<style>
.training--card .top img {
  width: 100%;
  height: 200px;
  object-position: center;
  -o-object-position: center;
  object-fit: cover;
  -o-object-fit: cover;
  border-radius: 20px 20px 0 0;
}

.training--card .middle {
  border: 1px solid var(--primary-300);
  background: #fff;
  padding: 15px;
  border-radius: 0 0 15px 15px;
}

.jobs--cards {
  display: grid;
  display: -ms-inline-grid;
  display: -moz-grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
