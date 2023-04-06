<template>
    <div>
      <h5 class="form-header text-center">Availability</h5>
      <form class="form-data">
          <div>
              <label for="">Experience <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled>Select Experience</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Available Openings <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled class="selected">Select Opening</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Deadline to opening <span class="text-danger">*</span></label>
              <input type="date" placeholder="Select date">
          </div>
          <div>
              <label for="">Country <span class="text-danger">*</span></label>
              <select> 
                  <option value="-" selected disabled>Select Country</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">State <span class="text-danger">*</span></label>
              <select> 
                  <option value="-" selected disabled>Select State</option>
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