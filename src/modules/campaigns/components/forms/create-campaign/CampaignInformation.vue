<template>
  <div>
    <h5 class="form-header text-center">Campaign Information</h5>
    
        <div>
            <label for="">Campaign Title <span class="text-danger">*</span></label>
            <input type="text" v-model="title" placeholder="Campaign Title" name="title">
        </div>
        <div>
            <label for="">Industry <span class="text-danger">*</span></label>
            <select name="industry" v-model="industry">
                <option value="-" selected disabled>Select Industry</option>
                <option value="1">1</option>
            </select>
        </div>
        <div>
            <label for="">Job Title <span class="text-danger">*</span></label>
            <select name="title" v-model="job_title">
                <option value="-" selected disabled class="selected">Select Title</option>
                <option value="1">1</option>
            </select>
        </div>
        <div>
            <label for="">Work Type <span class="text-danger">*</span></label>
            <select name="work-type" v-model="work_type">
                <option value="-" selected disabled>Domain</option>
                <option value="1">1</option>
            </select>
        </div>
  </div>
</template>

<script>
export default {
data(){
    return {
        title: null,
        industry: null,
        job_title: null, 
        work_type: null
    }
}
}
</script>

<style>

</style>