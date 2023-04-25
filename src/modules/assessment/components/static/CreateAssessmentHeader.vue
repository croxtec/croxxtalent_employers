<template>
  <div>
    <div class="assessment-header">
        <span role="button" v-for="item in assessmentHeaderMenu" :key="item.id" @click="selectHeader(item)"
        :class="{'active-header': activeEl === item.id}">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
        }
    },
    methods: {
        selectHeader(item) {
            this.$store.commit("assessmentHeader/SET_ACTIVE_EL", item.id)
        }
    },
    computed: {
        ...mapState('assessmentHeader', {
            activeEl: (state) => state.activeEl,
            assessmentHeaderMenu: (state) => state.assessmentHeaderMenu
        })
    }
}
</script>

<style scoped>
    .assessment-header {
        display: flex;
        display: inline-flex;
        display: -webkit-flex;
        gap: 25px;  
        border: 1px solid var(--primary-200);
        width: 55%;
        margin: 0 auto;
        border-radius: 35px;
        padding: 8px;
    }
    .assessment-header span {
        color: var(--primary-500);
        font-size: 14px;
        font-weight: 500;
        width: 100%;
        text-align: center;
        padding: 10px;
        display: block;
        border-radius: 30px;
    }

    .assessment-header span.active-header {
        background-color: var(--primary-50);
    }
</style>