<template>
    <div>
      <h5 class="form-header text-center">Other Details</h5>
      <form class="form-data">
          <div>
              <label for="">Course of Study <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled>Select Course</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Maximum Degree Requirement <span class="text-danger">*</span></label>
              <select>
                  <option value="-" selected disabled class="selected">Select Qualification</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Language <span class="text-danger">*</span></label>
              <select> 
                  <option value="-" selected disabled>Select Language</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div>
              <label for="">Salary Currency <span class="text-danger">*</span></label>
              <select> 
                  <option value="-" selected disabled>Select Currency</option>
                  <option value="1">1</option>
              </select>
          </div>
          <div class="d-flex align-items-center" style="gap:20px">
            <div>
              <label for="">Minimum Salary <span class="text-danger">*</span></label>
              <input type="text" placeholder="Input Amount">
            </div>
            <div>
              <label for="">Maximum Salary <span class="text-danger">*</span></label>
              <input type="text" placeholder="Input Amount">
            </div>
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