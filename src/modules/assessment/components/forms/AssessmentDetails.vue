<template>
  <div>
    <form class="form-data">
      <div class="d-flex align-items-center" style="gap:20px">
        <div class="w-100">
          <label for="">Domain <span class="text-danger">*</span></label>
          <select>
            <option value="-" selected disabled>Select Domain</option>
            <option value="1">1</option>
          </select>
        </div>
        <div class="w-100">
          <label for="">Core <span class="text-danger">*</span></label>
          <select>
            <option value="-" selected disabled>Select Core</option>
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div class="d-flex align-items-center" style="gap:20px">
        <div class="w-100">
          <label for="">Skill <span class="text-danger">*</span></label>
          <select>
            <option value="-" selected disabled>Select Skill</option>
            <option value="1" v-for="item in skills" :key="item.id">{{ item.name }}</option>
          </select>
        </div>
        <div class="w-100">
          <label for="">Level <span class="text-danger">*</span></label>
          <select>
            <option value="-" selected disabled>Select Level</option>
            <option value="1" v-for="item in levels" :key="item.id">{{ item.name }}</option>
          </select>
        </div>
      </div>

      <hr style="border-color:var(--primary-200)">

      <div class="d-flex align-items-center" style="gap:20px">
        <div class="w-100">
          <label for="">Assessment Name <span class="text-danger">*</span></label>
          <input type="text" placeholder="Assessment Name">
        </div>
        <div class="w-100">
          <label for="">Validity Period <span class="text-danger">*</span></label>
          <select>
            <option value="-" selected disabled>Select Validity Period</option>
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div class="d-flex align-items-center" style="gap:20px">
        <div class="w-100">
          <label for="">Categories <span class="text-danger">*</span></label>
          <select>
            <option value="-" selected disabled>Select Category</option>
            <option value="1" v-for="item in categories" :key="item.id">{{ item.name }}</option>
          </select>
        </div>
        <div class="w-100">
          <label for="">Delivery Type <span class="text-danger">*</span></label>
          <select>
            <option value="-" selected disabled>Select Delivery Type</option>
            <option value="1" v-for="item in delivery_type" :key="item.id">{{ item.name }}</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('config', {
      skills: (state) => state.skills,
      levels: (state) => state.levels,
      delivery_type: (state) => state.delivery_type,
      categories: (state) => state.categories
    })
  }
};
</script>

<style></style>
