<template>
  <div id="campaigns" class="spacer">
    <div>
      <CandidatesHeader @setTitle="setTitle" @getCandidates="getCampaignDetails"/>
    </div>
    <div class="table-data mt-3">
      <div class="table-top d-flex align-items-center justify-content-between gapper">
        <h6>{{ title }}</h6>
        <div>
          <div class="search-area">
            <i-icon icon="teenyicons:search-outline"/>
            <input type="search" name="" id="" placeholder="Search">
          </div>
        </div>
      </div>
      <hr class="m-0" style="border-color: var(--primary-200);"> 
      <div class="table-content gapper">
        <DataTable :campaign="campaign"/>
      </div>
    </div>
  </div>
</template>

<script>
import CandidatesHeader from '../components/static/CandidatesHeader.vue';
import DataTable from "../components/tables/DataTable.vue";

export default {
  components: { DataTable , CandidatesHeader},
  data(){
    return {
      campaign: 0,
      title: "Active Candidates"
    }
  },

  methods: {
    getCampaignDetails(e) {
      this.campaign = e.id
    },

    setTitle(e){
      this.title = e.title + " Candidates"
    }
  }
  
}
</script>

<style>

</style>