<template>
    <div class="spacer">
      <div class="jobs--cards">
        <talent-card v-for="item in 8" :key="item"/>
    </div>
    </div>
  </template>
  
  <script>
import TalentCard from '@/components/cards/talentCard.vue';
  export default {
    props: ["trainingCount"],
    components: {
      TalentCard
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
    border-radius:  0 0 15px 15px;
}


.jobs--cards {
    display: grid;
    display: -ms-inline-grid;
    display: -moz-grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
</style>