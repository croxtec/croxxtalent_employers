<template>
    <div id="applicants summary">
      <div class="bordered">
        <h6>Applicants Summary</h6>
        <div  class="mt-2 d-flex align-items-end" style="gap:5px">
            <h1 class="card-number">0</h1>
            <span class="text-secondary small">Applicants</span>
        </div>
        <div class="color-tabs my-3">
            <div v-for="item in applicantTypes"
                :class="item.name.charAt(0)"
                :key="item.id"
                class="color-tab"
                :style="{ width: `${item.frequency}` + '%' }">
            </div>
        </div>
        <div class="list-applicants">
            <div v-for="item in applicantTypes" :key="item.id" class="applicant-type">
                <span class="icon-tab" :class="item.name.charAt(0)"></span>
                <h6>{{ item.name + ":" }} <span class="number">{{item.frequency}}</span></h6>
            </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return {
          applicantTypes: [
            { id: 1, name: "Full-Time", frequency: 0 },
            { id: 2, name: "Internship", frequency: 0 },
            { id: 3, name: "Part-Time", frequency: 0 },
            { id: 4, name: "Contract", frequency: 0 },
            { id: 5, name: "Remote", frequency: 0 },
          ],
        }
    },
    computed: {
    crimePercentage(value) {
      return value;
    },
    totalCrimes() {
      return "Total";
    },
  },
  }
  </script>
  
  <style>
  
  </style>