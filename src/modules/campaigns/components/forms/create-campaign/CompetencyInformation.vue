<template>
    <div>
      <h5 class="form-header text-center">Competency</h5>
      <form class="form-data">
          <div>
              <label for="">Domain <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled>Select Domain</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Core <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled class="selected">Select Core</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Skill <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled>Select Skill</option>
                  <option value="1">1</option>
              </select>
          </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>