<template>
  <div>
    <div class="form-content" v-if="!questionsContainer">
      <div class="form-data" id="questions">
      <div class="">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <span>Setup Questions</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goToContainer">
                <span class="menu-icon">
                  <i-icon icon="solar:clipboard-text-linear" />
                </span>
                <span class="menu-label">Introduction/Instruction</span>
              </el-menu-item>
              <hr class="my-1" style="border-color: var(--primary-100)" />
              <el-menu-item index="1-2" @click="goToContainer">
                <span class="menu-icon"
                  ><i-icon icon="solar:clipboard-check-outline"
                /></span>
                <span class="menu-label">Single choice question</span>
              </el-menu-item>
              <hr class="my-1" style="border-color: var(--primary-100)" />
              <el-menu-item index="1-3" @click="goToContainer">
                <span class="menu-icon"
                  ><i-icon icon="solar:checklist-minimalistic-outline"
                /></span>
                <span class="menu-label">Multiple choice questions</span>
              </el-menu-item>
              <hr class="my-1" style="border-color: var(--primary-100)" />
              <el-menu-item index="1-4" @click="goToContainer">
                <span class="menu-icon"
                  ><i-icon icon="basil:edit-outline"
                /></span>
                <span class="menu-label">Open ended questions</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    </div>
    
    <!-- Container -->
    <div v-if="questionsContainer">
      <QuestionsContainer />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import QuestionsContainer from "./QuestionsContainer.vue";
export default {
  components: { QuestionsContainer },
  methods: {
    goToContainer(){
      this.$store.commit("assessmentHeader/SET_QUESTIONS_CONTAINER")
    }
  },
  computed:{
    ...mapState('assessmentHeader', {
      questionsContainer: (state) => state.questionsContainer
    })
  }
};
</script>

<style>
#questions .label {
  width: 40%;
  font-size: 13px;
  display: block;
  font-weight: 500;
}
#questions .assigned-list {
  border: 1px solid var(--primary-200);
  width: 100%;
  padding: 10px;
  border-radius: 20px;
}

#questions .assignee {
  display: flex;
  background: var(--primary-50);
  border-radius: 15px;
  padding: 5px 12px;
  font-size: 12px;
  color: var(--primary-500);
  font-weight: 500;
  width: max-content;
  gap: 8px;
}
#questions .el-menu {
  border-right: unset;
}
#questions .el-submenu__title {
  background: var(--primary-500);
  color: var(--white);
  border-radius: 30px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

#questions .el-submenu__title i {
  color: var(--white);
}

#questions .el-menu-item-group ul {
  width: 60%;
  margin: 0 auto;
  box-shadow: 0px 79px 128px rgba(192, 192, 192, 0.09),
    0px 28.8363px 46.7221px rgba(192, 192, 192, 0.0598508),
    0px 13.9995px 22.6827px rgba(192, 192, 192, 0.0475723),
    0px 6.86281px 11.1195px rgba(192, 192, 192, 0.0380675),
    0px 2.71357px 4.39666px rgba(192, 192, 192, 0.0270615);
  border-radius: 20px;
  border: 0.5px solid var(--gray-200);
  padding: 15px;
}

#questions .el-submenu .el-menu-item {
  padding: 25px !important;
}

#questions .el-menu-item-group__title {
  display: none;
}

#questions .el-menu-item,
.el-submenu__title {
  height: 45px;
  vertical-align: middle;
  line-height: 42px;
}

#questions .el-menu-item span.menu-label {
  font-weight: 400;
  font-size: 12.5px;
}

#questions .el-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

#questions .el-menu-item span.menu-icon {
  background: var(--tertiary-500);
  width: 40px;
  font-size: 20px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  height: 40px;
}
</style>
