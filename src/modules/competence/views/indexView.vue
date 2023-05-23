<template>
    <div class="spacer">
      <div class="mb-4 d-flex align-items-center justify-content-between">
        <div class="search-area w-auto">
          <i-icon icon="teenyicons:search-outline" class="search-icon"/>
          <input type="search" placeholder="Search competence">
        </div>
        <div>
          <router-link to="/create-assessment">
            <button class="button primary-btn d-flex align-items-center" style="gap:4px">
              <span> <i-icon icon="material-symbols:add"/> </span>
              <span>Add Assessment</span>
            </button>
          </router-link>
        </div>
      </div>
      <div class="skills">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="Well Services" name="1">
         <div>
          <skills-header :skillsArr="skillsArr" />
         </div>
          <div class="manager-data mt-3">
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
              <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Rig Operations" name="2">
          <div>
            <skills-header :skillsArr="skillsArr" />
          </div>
          <div class="manager-data mt-3">
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
  
            <div class="manager-info text-center" role="button" @click="$router.push('/manage-competence')">
               <div class="d-flex justify-content-center align-items-center" style="gap:10px">
                <h6 class="manager-name">Surface Cementing</h6>
                <span class="manager-count">20</span>
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    </div>
  </template>
  
  <script>
import skillsHeader from '@/components/skillsHeader.vue';
  import { mapActions } from 'vuex';
  export default {
  components: { skillsHeader },
    data() {
      return {
        activeNames: ["1", "2"],
        customColor: "#0040A1",
        percentage: 30,
        skillsArr: [
        {id:1, name:"Cementing jobs"},
        {id:2, name:"Stimulation equipment"},
       { id:3, name:"Auxiliary equipment"},
       {id:4, name: "Cementing equipment"},
        {id:5, name:"Down-holes tools"},
        {id:6, name:"Pressure jobs"},
        {id:7, name:"Cementing jobs"},
        {id:8, name:"Stimulation equipment"},
       { id:9, name:"Auxiliary equipment"},
       {id:10, name: "Cementing equipment"},
        {id:11, name:"Down-holes tools"},
        {id:12, name:"Pressure jobs"},
        ],
      };
    },
    methods: {
      ...mapActions('assessments', ['list']),
      handleChange(val) {
        console.log(val);
      },
    },
    beforeMount(){
      this.list()
    }
  };
  </script>
  
  <style scoped>
  .manager-info {
    background: var(--primary-50);
  }
</style>
  