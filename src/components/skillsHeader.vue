<template>
  <div class="skill-header">
    <div class="skills-list" id="container">
      <span
        role="button"
        @click="switchActive(item)"
        :class="{ active: activeEl === item.id }"
        v-for="item in skillsArr"
        :key="item.id"
        >{{ item.name }}</span
      >
    </div>
    <div class="arrows">
      <span class="left-arrow" role="button" @click="scrollButton('left')" @mousedown="scrollButton('left')">
        <i-icon icon="prime:angle-left" width="25px" />
      </span>
      <span class="right-arrow" role="button" @click="scrollButton('right')" @mousedown="scrollButton('right')">
        <i-icon icon="prime:angle-right" width="25px" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skillsArr"],
  data() {
    return {
      activeEl: 1,
    };
  },
  methods: {
    switchActive(item) {
      this.activeEl = item.id;
    },
    scrollButton(direction) {
      if (direction === "left") {
        document.getElementById("container").scrollLeft -= 50;
      } else {
        document.getElementById("container").scrollLeft += 50;
      }
    },
  },
};
</script>

<style>
.skill-header {
  border-radius: 25px;
  border: 1px solid var(--primary-200);
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  width: 100%;
  
}

.skills-list {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  overflow-x: scroll;
  gap: 20px;
  max-width: 90%;
  scroll-behavior: smooth;
}

.skills-list span {
  color: #979b9b;
  font-size: 12px;
  font-weight: 400;
  position: relative;
  padding: 10px 15px;
  white-space: nowrap;
}

.skills-list span.active {
  color: var(--dark);
  font-weight: 500;
  position: relative;
}

.skills-list span.active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  border-radius: 50px;
  background-color: var(--primary-500);
  bottom: -2px;
  z-index: 9999999;
  left: 0;
}

.skills-list::-webkit-scrollbar {
    display: none;
  }

.skills-list span:hover {
  color: var(--dark);
}

.arrows {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 10px;
}

.arrows span {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  background: var(--dark);
  color: var(--white);
  border-radius: 50%;
  height: 20px;
  width: 20px;
}

/* .left-arrow {
    
}

.right-arrow {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    background: var(--dark);
    color: var(--white);
} */
</style>
