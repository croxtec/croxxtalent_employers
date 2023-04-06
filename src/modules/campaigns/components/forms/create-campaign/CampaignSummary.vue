<template>
    <div>
      <h5 class="form-header text-center">Summary</h5>
      <form class="form-data">
          <div>
              <label for="">Campaign Title <span class="text-danger">*</span></label>
              <input type="text" placeholder="Campaign Title">
          </div>
          <div>
              <label for="">Industry <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled>Select Industry</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Job Title <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled class="selected">Select Title</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Work Type <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled>Domain</option>
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